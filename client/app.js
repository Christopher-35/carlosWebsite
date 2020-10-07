import React, {Component, useEffect} from 'react';
import { BrowserRouter, Route, NavLink, Switch, withRouter, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './app.css'
// import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { urlencoded } from 'body-parser';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

// import {REACT_APP_GOOGLE_KEY} from '../.env.local'

// require('dotenv').config();
// console.log('process.env', process.env.REACT_APP_GOOGLE_KEY);
import langs from './langs.js';
import SubmitForm from './components/Form';
import GMap from './gMaps';
import Home from './components/Home';
import Resources from './components/Resources';
import PracticeAreas from './components/PracticeAreas';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import mapComponent from './gMaps';

//Tell carlos to manipulate database data so querying is easier    LOOK INTO XSS
class App extends Component {
    constructor(props) {
        super(props);
        this.english = 'In English';
        this.spanish = 'En Español';
        this.state = {
          currentLang: 'En Español',
          headers: langs.headersEn,
          practiceDrop : langs.practiceEn,
          resourceDrop : langs.resourcesEn,
          introTitles: langs.introTitlesEn,
          introParagraphs: langs.introParagraphEn,
          contactInfo: langs.contactEn,
          formData: langs.formEn,
          formMute: langs.muteEn,
          showInfo: null
        };
        this.toggleLanguage = this.toggleLanguage.bind(this);
        this.toggleScroll = this.toggleScroll.bind(this);
        // this.hideContactInfo = this.hideContactInfo.bind(this);
        // this.showContactInfo = this.showContactInfo.bind(this);
    }

    toggleScroll (value) {
      // e.preventDefault();
      this.setState({
        showInfo: value
      })
    }

    // showContactInfo (e) {
    //   this.setState({
    //     showInfo: 'contact'
    //   })
    // }

    // showHomeInfo (e) {
    //   this.setState({
    //     showInfo: 'home'
    //   })
    // }

    

    toggleLanguage () {
      let newLang, newHeader, newPractice, newResource, newTitles, newParagraphs, newForms, newMutes, newContact;
      if (this.state.currentLang === this.spanish){
        // newLang = this.english;
        // newHeader = langs.headersEn;
        // newPractice = langs.practiceEn;
        // newResource = langs.resourcesEn;
        // newTitles = langs.introTitlesEn;
        // newParagraphs = langs.introParagraphEn;
        newLang = this.english;
        newHeader = langs.headersSp;
        newPractice = langs.practiceSp;
        newResource = langs.resourcesSp;
        newTitles = langs.introTitlesSp;
        newParagraphs = langs.introParagraphSp;
        newForms = langs.formSp;
        newMutes = langs.muteSp;
        newContact = langs.contactSp;
      } else {
        // newLang = this.spanish;
        // newHeader = langs.headersSp;
        // newPractice = langs.practiceSp;
        // newResource = langs.resourcesSp;
        // newTitles = langs.introTitlesSp;
        // newParagraphs = langs.introParagraphSp;

        newLang = this.spanish;
        newHeader = langs.headersEn;
        newPractice = langs.practiceEn;
        newResource = langs.resourcesEn;
        newTitles = langs.introTitlesEn;
        newParagraphs = langs.introParagraphEn;
        newForms = langs.formEn;
        newMutes = langs.muteEn;
        newContact = langs.contactEn;
      }
      this.toggleScroll(null);
      this.setState({
        currentLang: newLang,
        headers: newHeader,
        practiceDrop : newPractice,
        resourceDrop : newResource,
        introTitles: newTitles,
        introParagraphs: newParagraphs,
        formData: newForms,
        formMute: newMutes,
        contactInfo: newContact
      })
      // console.log('state', [...this.state]);
    }

    //make ur own file for navbar
    
    render () {
        let map = {
            src: 'url(https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1152793907268!2d-74.00773368459491!3d40.71547867933162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21c5648ca7%3A0x9e7cfbfc2568d0c9!2s305%20Broadway%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1592344414823!5m2!1sen!2sus)',
            frameboarder: '0',
            allowfullscreen: '',
            ariaHidden: 'false',
            tabindex: '0',
            width: '800',
            height: '800',
            border: '0'
        }
        return (
        <React.Fragment>
        <BrowserRouter>

        {/* CONSIDER WRAPPING EVERYTHING IN FLEX CONTAINER */}
       <Navbar id='make_gray' bg="light" expand="lg" fixed='top'>
          <Navbar.Brand><button onClick={()=> this.toggleLanguage()}  className='lang_button'>{this.state.currentLang}</button></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                &nbsp;&nbsp;&nbsp;&nbsp;<Nav.Link exact onClick={() => this.toggleScroll('home')} className='home-link' as={NavLink} to="/#scroll-home">{this.state.headers[0]}</Nav.Link>
                <NavDropdown title={this.state.headers[1]} id="basic-nav-dropdown">
                    {/* <NavDropdown.Item>{this.state.practiceDrop[0]}</NavDropdown.Item> */}
                    <NavDropdown.Item as={Link} exact='true' to="/practice-areas">{this.state.practiceDrop[0]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} exact='true' to="/practice-areas">{this.state.practiceDrop[1]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} exact='true' to="/practice-areas">{this.state.practiceDrop[2]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} exact='true' to="/practice-areas">{this.state.practiceDrop[3]}</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={this.state.headers[2]} id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} exact='true' to="/resources">{this.state.resourceDrop[0]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} exact='true' to="/resources">{this.state.resourceDrop[1]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} exact='true' to="/resources">{this.state.resourceDrop[2]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} exact='true' to="/resources">{this.state.resourceDrop[3]}</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link exact onClick={() => this.toggleScroll('contact')} className='clientPortfolio-link' as={NavLink} to="/#contact-info">{this.state.headers[3]}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <div className='_botNav'>
              <div>
                <b style={{letterSpacing: '.75px'}}>{this.state.contactInfo[1]}&nbsp;</b> 
                {this.state.contactInfo[2]}
              </div>
              <div>
                <b style={{letterSpacing: '.75px'}}>{this.state.contactInfo[3]}&nbsp;</b> 
                {this.state.contactInfo[4]}
              </div>
              <div>
                <b style={{letterSpacing: '.75px'}}>{this.state.contactInfo[5]}&nbsp;</b> 
                {this.state.contactInfo[6]}
              </div>

              {/* <div className='_address'><p className='_atext'>Address:  
305 Broadway Suite 1001 New York, NY 10007</p></div> */}
              {/* <p className='_phone'>phone</p>
              <p className='_fax'>fax</p> */}
              </div>
            <Switch>
        <Route path='/' exact render={() => (<Home langs={{...this.state}}/>)} />
        <Route path='/resources' exact render={() => (<Resources/>)} />
        <Route path='/practice-areas' exact render={() => (<PracticeAreas/>)}  />
        {/* <Route to='/' render={() => (<Home langs={{...this.state}}/>)} /> */}
        <Route path='/#scroll-home' exact  render={() => (<Home langs={{...this.state}}/>)}/>
        <Route path='/#contact-info' exact  render={() => (<Home langs={{...this.state}}/>)}/> 
         {/* <Route to='/s' /> */}
        </Switch>

            {/* <Home langs={{...this.state}}/> */}
            </BrowserRouter>
        </React.Fragment>

        )
    }

}

export default App;


// function Map() {
    
//     return (
//         <GoogleMap 
//         defaultZoom={17} 
//         defaultCenter={{lat: 40.715610, lng: -74.005480}}  
//         >
//         {<Marker key={'305'} position={{lat: 40.715610, lng: -74.005480}}/>}
//         </GoogleMap>
   
        
//     )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// export default function App() {
//     return <div style={{width: '80vw', height: '80vh'}}> 
//         <WrappedMap
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
//         loadingElement={<div style={{height: '100%'}}/>}
//         containerElement={<div style={{height: '100%'}}/>}
//         mapElement={<div style={{height: '100%'}}/>}
//         />
         
//          </div>
// }

