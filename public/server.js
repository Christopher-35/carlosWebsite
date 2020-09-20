const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  try {
    let { fullname } = req.body;
    console.log('fullname=',fullname);
    let email = req.body.email.toLowerCase();
    console.log('email=',email);
    let { phonenumber } = req.body;
    console.log('phonenumber=',phonenumber);
    let { message } = req.body;
    console.log('message=',message);
    let { sharedid } = req.body;
    console.log('sharedid=', sharedid);
    // let body = req.body;
    //shareIdExists
    let shareIdExists = false;
    let sharedIdNum = null;

    //check email and phonenumber input to see if they match
    const checkMessage = await pool.query(
      "SELECT * FROM customers WHERE email_address = $1 OR phone_number = $2",
      [email, phonenumber]
    );
    //console.log('checkMessage', checkMessage.rows);
    // res.json(checkMessage)
//     console.log(res.json(checkMessage));
    if (checkMessage.rows.length > 0){ 
    sharedIdNum = checkMessage.rows[0].shared_id
    shareIdExists = true;
    }
  console.log('sharedIdNum=', sharedIdNum);

  if (!shareIdExists){
    //if no match, insert message with incremented shared_id
    
    const newMessage = await pool.query(
      "INSERT INTO customers (full_name, email_address, phone_number, message) VALUES($1, $2, $3, $4) RETURNING *",
      [fullname, email, phonenumber, message]
    );
    res.json(newMessage.rows);
     
  }

  if (shareIdExists) {
    const messageWithSharedId = await pool.query(
      "INSERT INTO customers (full_name, email_address, phone_number, message, shared_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [fullname, email, phonenumber, message, sharedIdNum]
    );
    res.json(messageWithSharedId);
  }

//     // if (shareIdExists) {

    // }
    
//     // console.log(body);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000')
})



