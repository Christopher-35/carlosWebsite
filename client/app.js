import React, {Component} from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './app.css'
// import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { urlencoded } from 'body-parser';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
import About from './components/About';
import Home from './components/Home';
import Shop from './components/Shop';

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
          formData: langs.formEn,
          formMute: langs.muteEn,
          showInfo: false,
          showHome: true
        };
        this.toggleLanguage = this.toggleLanguage.bind(this);
        this.hideContactInfo = this.hideContactInfo.bind(this);
        this.showContactInfo = this.showContactInfo.bind(this);
        this.showHomeInfo = this.showHomeInfo.bind(this);
    }

    hideContactInfo (e) {
      e.preventDefault();
      this.setState({
        showInfo: false
      })
    }

    showContactInfo (e) {
      this.setState({
        showHome: false,
        showInfo: true
      })
    }

    showHomeInfo (e) {
      this.setState({
        showHome: true,
        showInfo: false
      })
    }

    

    toggleLanguage () {
      let newLang, newHeader, newPractice, newResource, newTitles, newParagraphs, newForms, newMutes;
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
      }

      this.setState({
        currentLang: newLang,
        headers: newHeader,
        practiceDrop : newPractice,
        resourceDrop : newResource,
        introTitles: newTitles,
        introParagraphs: newParagraphs,
        formData: newForms,
        formMute: newMutes
      })
      // console.log('state', [...this.state]);
    }


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
        <Switch>
        <Route to='/' exact render={() => (<Home langs={{...this.state}}/>)} />
        <Route to='/practice-areas' exact  />
        <Route to='/resources' exact  />
        {/* <Route to='/' render={() => (<Home langs={{...this.state}}/>)} /> */}
        <Route to='/#scroll-home' exact  render={() => (<Home langs={{...this.state}}/>)}/>
        <Route to='/#contact-info' exact  render={() => (<Home langs={{...this.state}}/>)}/> 
         {/* <Route to='/s' /> */}
        </Switch>
 
        {/* CONSIDER WRAPPING EVERYTHING IN FLEX CONTAINER */}
       <Navbar id='make_gray' bg="light" expand="lg" fixed='top'>
          <Navbar.Brand><button onClick={()=> this.toggleLanguage()}  className='lang_button'>{this.state.currentLang}</button></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                &nbsp;&nbsp;&nbsp;&nbsp;<Nav.Link onClick={this.showHomeInfo} className='home-link' as={NavLink} to="/#scroll-home">{this.state.headers[0]}</Nav.Link>
                <NavDropdown title={this.state.headers[1]} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={this.hideContactInfo} href="#action/3.1">{this.state.practiceDrop[0]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.hideContactInfo} href="#action/3.2">{this.state.practiceDrop[1]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.hideContactInfo} href="#action/3.3">{this.state.practiceDrop[2]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.hideContactInfo} href="#action/3.4">{this.state.practiceDrop[3]}</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={this.state.headers[2]} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={this.hideContactInfo} href="#action/3.1">{this.state.resourceDrop[0]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.hideContactInfo} href="#action/3.2">{this.state.resourceDrop[1]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.hideContactInfo} href="#action/3.3">{this.state.resourceDrop[2]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.hideContactInfo} href="#action/3.4">{this.state.resourceDrop[3]}</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={this.showContactInfo} className='clientPortfolio-link' as={NavLink} to="/#contact-info">{this.state.headers[3]}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

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

