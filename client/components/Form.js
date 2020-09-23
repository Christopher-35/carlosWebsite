import React, {Fragment, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import regeneratorRuntime from "regenerator-runtime";
import { HeatmapLayer } from '@react-google-maps/api';

const SubmitForm = ({ formData }) => {

  const [fullNameInput, setFullNameInput] = useState("");
  const [canSubmitName, setCanSubmitName] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [canSubmitEmail, setCanSubmitEmail] = useState(false);
  const [numberInput, setNumberInput] = useState("");
  const [canSubmitNumber, setCanSubmitNumber] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [canSubmitInput, setCanSubmitInput] = useState(false);

  const [isValidated, setIsValidated] = useState(false);
  const [disableAllButtons, setDisableAllButtons] = useState(false);

  const nameOnChange = (e) => {
    try {
    setFullNameInput(e.target.value);
    if (e.target.value.indexOf(' ') === -1) {
      console.error('error bc you typed in', e.target.value);
    } else {
      console.log('position', e.target.value.indexOf(' '));
      setCanSubmitName(true);  
      if (canSubmitName && canSubmitEmail && canSubmitNumber && canSubmitInput){
        setIsValidated(true);
      }
    }
  } catch (err) {
    console.log('err=', err.message);
  }
  }

  const onSubmitForm = async ( e ) => {
    e.preventDefault();
    try {
      e.currentTarget.checkValidity();
        //  CREATE IF STATEMENT FOR ISVALIDATED VAR
      if (canSubmitName){
      const body = { 
        "fullname": fullNameInput,
        "email": "",
        "phonenumber": "",
        "message": ""

      };
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      console.log('response', response);
    }
    } catch (err) {
      console.error(err.message);
      console.error('might not meet the name requirements');
    }
  }

  return (

<Fragment>
  <Form onSubmit={onSubmitForm} className='user_form' validated={isValidated} noValidate>
    
      <Form.Group controlId="formBasicName">
        <Form.Label>{formData[0]}</Form.Label>
        <Form.Control
        type="text"
        value={fullNameInput} 
        // onChange={ e => setFullNameInput(e.target.value, console.log('value', e.target.value))}
        onChange={(e) => nameOnChange(e)}
        type="usersName" 
        placeholder={formData[1]}
        disabled={disableAllButtons}
        required
        />      
        <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
        <Form.Control.Feedback> Good username </Form.Control.Feedback>
        {/* <Form.Text className="text-muted">{formData[11]}</Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>{formData[2]}</Form.Label>
        <Form.Control 
        type="text" 
        placeholder={formData[3]} 
        disabled={disableAllButtons}
        required
        />
        <Form.Text style={{color: ''}} className='text-muted' >
        {/* <b>{formData[4]} ✔️</b> */}
        <b>{formData[4]} ❌</b>
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>{formData[5]}</Form.Label>
        <Form.Control 
        type="text" 
        placeholder={formData[6]} 
        disabled={disableAllButtons}
        required/>
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Row>
        <Col as='div' sm={12}>
        {/* <Form.Label column> */}
        <Form.Label>{formData[7]}</Form.Label>
        <Form.Control 
        type="text" 
        as="textarea" 
        rows="4" 
        placeholder={formData[8]} 
        disabled={disableAllButtons}
        required/>
        {/* <Form.Label /> */}
        </Col>
        </Form.Row>

      </Form.Group>
      
      <Button disabled={disableAllButtons} variant="success" type="submit">
      {formData[9]}
      </Button>
  </Form>
</Fragment>
  )
}

export default SubmitForm;