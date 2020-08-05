import React, {Component} from 'react';
import './app.css'
// import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { urlencoded } from 'body-parser';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {REACT_APP_GOOGLE_KEY} from '../.env.local'

// require('dotenv').config();
// console.log('process.env', process.env.REACT_APP_GOOGLE_KEY);
import langs from './langs.js';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import mapComponent from './gMaps';
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
          introParagraphs: langs.introParagraphEn
          
        };
        this.toggleLanguage = this.toggleLanguage.bind(this);
    }

    toggleLanguage () {
      let newLang, newHeader, newPractice, newResource, newTitles, newParagraphs;
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
      }

      this.setState({
        currentLang: newLang,
        headers: newHeader,
        practiceDrop : newPractice,
        resourceDrop : newResource,
        introTitles: newTitles,
        introParagraphs: newParagraphs
      })
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
        <div className='react-container'>
            {/* <header>
              <div className='container'>
                <nav>
                    <ul>
                        <li><a href='#'>About Our Firm</a></li>
                        <li><a href='#'>Practice Areas</a></li>
                        <li><a href='#'>Resources</a></li>
                        <li><a href='#'>FAQs</a></li>
                        <li><a href='#'>Contact Info.</a></li>
                    </ul>
                </nav>
              </div>
              <img className='coolLogo' src='carlos.jpg' alt='logo'/>
            </header> */}

        {/* <img src='brickLogo.png'/> */}
        {/* CONSIDER WRAPPING EVERYTHING IN FLEX CONTAINER */}
       <Navbar id='make_gray' bg="light" expand="lg" fixed='top'>
          <Navbar.Brand href="#home"><button onClick={()=> this.toggleLanguage()}  className='lang_button'>{this.state.currentLang}</button></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className='home-link' href="#home">{this.state.headers[0]}</Nav.Link>
                <NavDropdown title={this.state.headers[1]} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">{this.state.practiceDrop[0]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">{this.state.practiceDrop[1]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">{this.state.practiceDrop[2]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">{this.state.practiceDrop[3]}</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={this.state.headers[2]} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">{this.state.resourceDrop[0]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">{this.state.resourceDrop[1]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">{this.state.resourceDrop[2]}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">{this.state.resourceDrop[3]}</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='clientPortfolio-link' href="#clientPortfolio">{this.state.headers[3]}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

            <div className='about-me'>
            <div className='who'>
              <p className='who-title'>{this.state.introTitles[0]}</p>
              <p className='who-p'>{this.state.introParagraphs[0]}</p>
            </div>
            <div className='what-table'>
              <p className='what-title'>{this.state.introTitles[1]}</p>
              <p className='what-p'>{this.state.introParagraphs[1]}</p>
            </div>
            <div className='what-done'>
            <p className='d-title'>{this.state.introTitles[2]}</p>
            <p className='d-p'>{this.state.introParagraphs[2]}</p>
            </div>
            </div>

            <div className='home-clients'>
            <img className='cool_logo' src='carlos.jpg' alt='logo' />
              {/* <h1 className='home-client-title'>Featured Clients</h1> */}
              {/* <img src='zipLogo.png' className='zip-container'/> */}
              {/* <div className='zip-container' style={{background: 'zipLogo.png'}}></div> */}
              {/* <img src='jabord.png' className='ja-container'/> */}
              {/* <img src='jinglz.png' className='jin-container'/> */}
              {/* <img src='' className='semantic-container'/>
              <img src='' className='talkbox-container'/>
              <img src='' className='h1-container'/>
              <img src='' className='bms-container'/>
              <img src='' className='equities-container'/> */}

            </div>

            <div className='home-blog'></div>

            <div className='last-section'></div>
            
            {/* <br/>
            <img className='divBackground' src='passport.jpg' alt='books'/>
            <div className='map'><h1>Map</h1></div>
            <p className='middle-left'>
                1)&nbsp Talk About the type of cases you handle (h1b1, marriage cases, naturalization, etc.)
                <br/>
                2) &nbspInsert Picture Here &nbsp &nbsp &nbsp Talk about yourself/experience briefly and include law school
                <br/>
                Request a Consultation <br/>
                <input type='text' placeholder='Name'/><br/>
                <input type='text' placeholder='E-mail'/><br/>
                <input type='text' placeholder='Phone Number'/><br/><br/>
                <input className='message' type='text' placeholder='Message'/><br/>
                4)  &nbspInsert Google Maps Location Here&nbsp  Allows people to find you on google maps if you want it
                <br/><br/><br/>
            </p>
            <p><button className='logo'>En Español</button></p>

            <mapComponent/>             */}
            
            {/* <Map className='gmap' google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
            <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
            </Map> */}

            {/* <section></section>
            <div className='words'>
              <p>Contact Information:
                <p className='contact'>
                 </p>
              </p>
            </div> */}
        </div>
        )
    }

}

// export default App;

export default GoogleApiWrapper({
    apiKey: ('AIzaSyA0wWqbGDTQum__FJsDqplkubn6vvGCblM')
  })(App)

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

