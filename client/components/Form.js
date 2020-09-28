import React, {Fragment, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import langs from '../langs';
import regeneratorRuntime from "regenerator-runtime";
import { HeatmapLayer } from '@react-google-maps/api';
import { set } from 'date-fns';
import './form.css';

const SubmitForm = ({ formData, formMute }) => {

  const [fullNameInput, setFullNameInput] = useState("");
  const [nameMIndex, setNameMIndex] = useState(0);
  const [canSubmitName, setCanSubmitName] = useState(false);
  const [nameStatus, setNameStatus] = useState(0);

  const [emailInput, setEmailInput] = useState("");
  const [emailMIndex, setEmailMIndex] = useState(3);
  const [canSubmitEmail, setCanSubmitEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState(0);

  const [numberInput, setNumberInput] = useState("");
  const [numberMIndex, setNumberMIndex] = useState(6);
  const [canSubmitNumber, setCanSubmitNumber] = useState(false);
  const [numberStatus, setNumberStatus] = useState(0);


  const [messageInput, setMessageInput] = useState("");
  const [messageMIndex, setMessageMIndex] = useState(9);
  const [canSubmitMessage, setCanSubmitMessage] = useState(false);
  const [messageStatus, setMessageStatus] = useState(0);


  // const [canSubmitInput, setCanSubmitInput] = useState(false);

  const [isValidated, setIsValidated] = useState(false);
  const [disableAllButtons, setDisableAllButtons] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitColor, setSubmitColor] = useState("#dc3545");
  // const [langsMuted, setLangsMuted] = useState([formData[2], formData[7], formData[12]], formData[17])

  const nameOnChange = (e) => {
    try {
    console.log('props', langs);
    setFullNameInput(e.target.value);
    // const regName = new RegExp(/^[a-z ,.'-]+$/i);
    // let regName = "^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$";
      let regName = /\w+\s\w+/;
      if (e.target.value.length === 0 || !/\S/.test(e.target.value)){
      console.log('length=', e.target.value.length);
      setNameStatus(0);
      setNameMIndex(0);
      setCanSubmitName(false); 
      }
      /*else if (e.target.value.indexOf(' ') === -1) {
      setNameStatus(1);
      setCanSubmitName(false); 
      // console.error('error bc you typed in', e.target.value);
      
      }*/
      
      else if(!regName.test(e.target.value)){
        setNameStatus(1);
        setNameMIndex(1);
        setCanSubmitName(false);
      } else /*if (regName.test(e.target.value))*/ {
      // console.log('position', e.target.value.indexOf(' '));
      setNameStatus(2);
      setNameMIndex(2);
      setCanSubmitName(true);  
      console.log('namestatus=', canSubmitName, 'emailstatus=', canSubmitEmail, 'numberstatus=', canSubmitNumber, 'messageStatus=', canSubmitMessage);

      if (canSubmitName && canSubmitEmail && canSubmitNumber && canSubmitMessage){
        setIsValidated(true);
      }
    }
  } catch (err) {
    console.error('err=', err.message);
  }
  }

  const emailOnChange = (e) => {
    try {
      let regEmail = /[\w-]+@([\w-]+\.)+[\w-]+/;
      setEmailInput(e.target.value);
        if (e.target.value.length === 0){
        setEmailStatus(0);
        setEmailMIndex(3);
        setCanSubmitEmail(false)
        }
        /*else if (e.target.value.indexOf('@') === -1 && e.target.value.length < 7) {
        setEmailStatus(1);
        setCanSubmitEmail(false);
        // console.error('error bc you typed in', e.target.value);
        }*/else if(!regEmail.test(e.target.value)){
          setEmailStatus(1);
          setEmailMIndex(4);
          setCanSubmitEmail(false);
        } else {
        // console.log('position', e.target.value.indexOf(' '));
        setEmailStatus(2);
        setEmailMIndex(5);
        setCanSubmitEmail(true);  
        console.log('namestatus=', canSubmitName, 'emailstatus=', canSubmitEmail, 'numberstatus=', canSubmitNumber, 'messageStatus=', canSubmitMessage);

        if (canSubmitName && canSubmitEmail && canSubmitNumber && canSubmitMessage){
          setIsValidated(true);
        }
      }
    } catch (err) {
      console.error('err=', err.message);
    }
  }

  const numberOnChange = (e) => {
    try {
      console.log('typeof', typeof e.target.value);
      setNumberInput(e.target.value);
      let copy = e.target.value.slice();
      copy = copy.replace(/[-# ]/g, "");
      let regNum = /^\d+$/;
      // copy = copy.replace(/ /g,'')
      console.log('copy=', copy, 'length=', copy.length);
        if (e.target.value.length === 0 ){
        setNumberStatus(0);
        setNumberMIndex(6);
        setCanSubmitNumber(false) 
        }
        else if (/*e.target.value.length < 10 ||*/!regNum.test(copy) || copy.length > 16 || copy.length < 10) {
        setNumberStatus(1);
        setNumberMIndex(7);
        setCanSubmitNumber(false);
        // console.error('error bc you typed in', e.target.value);
        } else {
        // console.log('position', e.target.value.indexOf(' '));
        setNumberStatus(2);
        setNumberMIndex(8);
        setCanSubmitNumber(true);  
        console.log('namestatus=', canSubmitName, 'emailstatus=', canSubmitEmail, 'numberstatus=', canSubmitNumber, 'messageStatus=', canSubmitMessage);

        if (canSubmitName && canSubmitEmail && canSubmitNumber && canSubmitMessage){
          setIsValidated(true);
        }
      }
    } catch (err) {
      console.error('err=', err.message);
    }
  }

  const messageOnChange = (e) => {
    try {
      setMessageInput(e.target.value);
        if (e.target.value.length === 0 ){
        setMessageStatus(0);
        setMessageMIndex(9);
        setCanSubmitMessage(false)
        }
        else if (e.target.value.length < 20 || e.target.value.length > 1000) {
        setMessageStatus(1);
        setMessageMIndex(10);
        setCanSubmitMessage(false);
        // console.error('error bc you typed in', e.target.value);
        } else {
        // console.log('position', e.target.value.indexOf(' '));
        setMessageStatus(2);
        setMessageMIndex(11);
        setCanSubmitMessage(true);  
        console.log('namestatus=', canSubmitName, 'emailstatus=', canSubmitEmail, 'numberstatus=', canSubmitNumber, 'messageStatus=', canSubmitMessage);

        if (canSubmitName && canSubmitEmail && canSubmitNumber && canSubmitMessage){
          setIsValidated(true);
        }
      }
    } catch (err) {
      console.error('err=', err.message);
    }
  }

  const onSubmitForm = async ( e ) => {
    e.preventDefault();
    console.log('validity=', isValidated)
    try {
      // e.currentTarget.checkValidity();
      if (!isValidated){
        setSubmitMessage('Please fill out all forms correctly')
      } else {
      
        //  CREATE IF STATEMENT FOR ISVALIDATED VAR
      setDisableAllButtons(true);
      setSubmitColor('hsl(134, 61%, 31%)')
      setSubmitMessage('Submission Successful! If you want to re-submit, please refresh the page');
      const body = { 
        "fullname": fullNameInput,
        "email": emailInput,
        "phonenumber": numberInput,
        "message": messageInput

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
        // type="usersName" 
        placeholder={formData[1]}
        disabled={disableAllButtons}
        required
        style={{border: `${langs.border[nameStatus]}`, background: `${langs.background[nameStatus]}`}}
        />      
        {/* <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
        <Form.Control.Feedback> Good username </Form.Control.Feedback> */}
        <Form.Text className="text-muted">{formMute[nameMIndex]}</Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>{formData[5]}</Form.Label>
        <Form.Control 
        type="text" 
        value={emailInput}
        onChange={(e) => emailOnChange(e)}
        placeholder={formData[6]} 
        disabled={disableAllButtons}
        required 
        style={{border: `${langs.border[emailStatus]}`, background: `${langs.background[emailStatus]}`}}
        /* dark green=#28a745 light-green=#bbffb9  */
        />
        {/* <p style={{display: 'inline-block'}}>ey</p> */}
        <Form.Text style={{color: ''}} className='text-muted' >{formMute[emailMIndex]}</Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>{formData[10]}</Form.Label>
        <Form.Control 
        type="text" 
        value={numberInput}
        onChange={(e) => numberOnChange(e)}
        placeholder={formData[11]} 
        disabled={disableAllButtons}
        required
        style={{border: `${langs.border[numberStatus]}`, background: `${langs.background[numberStatus]}`}}
        />
        <Form.Text className="text-muted">{formMute[numberMIndex]}</Form.Text>
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Row>
        <Col as='div' sm={11}>
        {/* <Form.Label column> */}
        <Form.Label>{formData[15]}</Form.Label>
        <Form.Control 
        type="text" 
        value={messageInput}
        onChange={(e) => messageOnChange(e)}
        as="textarea" 
        rows="4" 
        placeholder={formData[16]} 
        disabled={disableAllButtons}
        style={{border: `${langs.border[messageStatus]}`, background: `${langs.background[messageStatus]}`}}
        required/>
        {/* <Form.Label /> */}
        <Form.Text className="text-muted">{formMute[messageMIndex]}</Form.Text>
        </Col>
        </Form.Row>

      </Form.Group>
      
      <Button disabled={disableAllButtons} variant="success" type="submit">{formData[20]}</Button> 
      &nbsp;&nbsp;&nbsp;&nbsp;<Form.Label className='f_Label' style={{color: `${submitColor}`}}>{submitMessage}</Form.Label>    
  </Form>
</Fragment>
  )
}

export default SubmitForm;