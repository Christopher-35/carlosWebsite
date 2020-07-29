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

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import mapComponent from './gMaps';
class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {

        };
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
            
            {/* <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar> */}
        {/*id='nav_id'*/}

        <Navbar id='make_gray' bg="light" expand="lg" fixed='top'>
            <Navbar.Brand href="#home"><img src='brickLogo.png'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className='home-link' href="#home">Home</Nav.Link>
                <Nav.Link className='consulting-link' href="#consulting">Consulting</Nav.Link>
                <NavDropdown title="Resources" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">For Entrepreneurs</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">Investor Tips/Training</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Case Studies</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='clientPortfolio-link' href="#clientPortfolio">Client Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

            <div className='about-me'>
            <div className='who'>
              <p className='who-title'>Who We Are...</p>
              <p className='who-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor justo non scelerisque feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et elit non lacus dictum suscipit vitae eget nunc. In sit amet pellentesque velit, eget ultricies nisi. Pellentesque nec efficitur quam, at sodales nunc. Duis convallis nisi in odio vehicula, at ornare eros aliquam. Nullam vestibulum quis elit vitae mollis. Integer nec erat augue.</p>
            </div>
            <div className='what-table'>
              <p className='what-title'>What We Bring To The Table...</p>
              <p className='what-p'>Duis metus massa, lacinia id porttitor sed, malesuada sed dui. Duis vehicula et ipsum ac venenatis. Nulla fermentum ipsum et metus ultricies, at volutpat dui blandit. Nulla ante purus, scelerisque a ipsum ac, tincidunt cursus dui. Praesent varius eleifend leo id venenatis. Donec lacinia maximus tellus id suscipit. Vivamus tincidunt neque nec velit elementum, in ornare quam rutrum. Vivamus dictum ipsum et mauris placerat placerat. Aliquam eu dui vulputate, congue nunc id, eleifend velit. Phasellus non cursus neque, porta rhoncus massa.</p>
            </div>
            <div className='what-done'>
            <p className='d-title'>What We've Done...</p>
            <p className='d-p'>Donec non ante mattis purus lacinia dignissim ut sit amet mi. Mauris aliquet purus ac elit scelerisque imperdiet. Mauris purus est, commodo ac lectus ut, iaculis fermentum nunc. Sed fermentum, velit pharetra commodo sagittis, libero mi eleifend tellus, eu porttitor orci urna id ante. Suspendisse et nisi a arcu bibendum maximus. Sed libero mi, gravida quis felis in, venenatis luctus nibh. Maecenas ut pretium purus. Sed sit amet justo lectus. Fusce lobortis dolor vel elit pulvinar, Etiam in pulvinar metus.</p>
            </div>
            </div>

            <div className='home-clients'>
              <h1 className='home-client-title'>Featured Clients</h1>
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

