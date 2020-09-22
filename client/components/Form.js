import React, {Fragment, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import regeneratorRuntime from "regenerator-runtime";

const SubmitForm = ({ formData }) => {

  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const onSubmitForm = async ( e ) => {
    e.preventDefault();

    try {
      const body = { 
        "fullname": fullNameInput,
        "email": "howdy",
        "phonenumber": "1800",
        "message": "bitchin"

      };
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      console.log('response', response);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (

<Fragment>
  <Form onSubmit={onSubmitForm} className='user_form'>
    <fieldset disabled={false}>
      <Form.Group controlId="formBasicName">
        <Form.Label>{formData[0]}</Form.Label>
        <Form.Control 
        type="text"
        value={fullNameInput} 
        onChange={ e => setFullNameInput(e.target.value)}
        type="usersName" 
        placeholder={formData[1]} />
        <Form.Text className="text-muted">{formData[11]}</Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>{formData[2]}</Form.Label>
        <Form.Control type="text" placeholder={formData[3]} />
        <Form.Text className="text-muted">
        {formData[4]}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>{formData[5]}</Form.Label>
        <Form.Control type="text" placeholder={formData[6]} />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Row>
        <Col as='div' sm={12}>
        {/* <Form.Label column> */}
        <Form.Label>{formData[7]}</Form.Label>
        <Form.Control type="text" as="textarea" rows="4" placeholder={formData[8]} />
        {/* <Form.Label /> */}
        </Col>
        </Form.Row>

      </Form.Group>
      
      <Button variant="success" type="submit">
      {formData[9]}
      </Button>
    </fieldset>
  </Form>
</Fragment>
  )
}

export default SubmitForm;