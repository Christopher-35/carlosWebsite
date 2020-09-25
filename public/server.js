const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  try {
    console.log('req.body=', req.body);
    let { fullname } = req.body;
    fullname = fullname.trim();
    console.log('fullname=',fullname);
    let email = req.body.email.toLowerCase();
    email = email.trim();
    console.log('email=',email);
    let { phonenumber } = req.body;
    phonenumber = phonenumber.replace(/[-# ]/g, "");
    let nArr = [];
    if (phonenumber.length > 13) { 
      console.log('length', phonenumber.length);
      nArr = phonenumber.split('');
      console.log('nArr', nArr);
      nArr.splice(4, 0, '-');
      nArr.splice(8, 0, '-');
      nArr.splice(12, 0, '-');
      phonenumber = nArr.join('');
      console.log('nArr', nArr);
      console.log('join4', nArr.join(''));
    } else if (phonenumber.length === 13) {
      console.log('length', phonenumber.length);
      nArr = phonenumber.split('');
      console.log('nArr', nArr);
      nArr.splice(3, 0, '-');
      nArr.splice(7, 0, '-');
      nArr.splice(11, 0, '-');
      phonenumber = nArr.join('');
    } else if (phonenumber.length === 12) {
      console.log('length', phonenumber.length);
      nArr = phonenumber.split('');
      console.log('nArr', nArr);
      nArr.splice(2, 0, '-');
      nArr.splice(6, 0, '-');
      nArr.splice(10, 0, '-');
      phonenumber = nArr.join('');
    } else if (phonenumber.length === 11) {
      console.log('length', phonenumber.length);
      nArr = phonenumber.split('');
      console.log('nArr', nArr);
      nArr.splice(1, 0, '-');
      nArr.splice(5, 0, '-');
      nArr.splice(9, 0, '-');
      phonenumber = nArr.join('');
    } else if (phonenumber.length === 10) {
      console.log('length', phonenumber.length);
      nArr = phonenumber.split('');
      console.log('nArr', nArr);
      nArr.splice(3, 0, '-');
      nArr.splice(7, 0, '-');
      phonenumber = nArr.join('');
    }

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

  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000')
})



