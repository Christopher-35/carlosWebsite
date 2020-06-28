import React, {Component} from 'react';
import './app.css'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { urlencoded } from 'body-parser';

// import {REACT_APP_GOOGLE_KEY} from '../.env.local'

// require('dotenv').config();
// console.log('process.env', process.env.REACT_APP_GOOGLE_KEY);

// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import mapComponent from './gMaps';
// class App extends Component {
    
//     constructor(props) {
//         super(props);

//         this.state = {

//         };
//     }


//     render () {
//         let map = {
//             src: 'url(https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1152793907268!2d-74.00773368459491!3d40.71547867933162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21c5648ca7%3A0x9e7cfbfc2568d0c9!2s305%20Broadway%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1592344414823!5m2!1sen!2sus)',
//             frameboarder: '0',
//             allowfullscreen: '',
//             ariaHidden: 'false',
//             tabindex: '0',
//             width: '800',
//             height: '800',
//             border: '0'
//         }
//         return (
//         <div>
//             <header>
//               <div className='container'>
//                 <nav>
//                     <ul>
//                         <li><a href='#'>About Our Firm</a></li>
//                         <li><a href='#'>Practice Areas</a></li>
//                         <li><a href='#'>Resources</a></li>
//                         <li><a href='#'>FAQs</a></li>
//                         <li><a href='#'>Contact Info.</a></li>
//                     </ul>
//                 </nav>
//               </div>
//               <img className='coolLogo' src='carlos.jpg' alt='logo'/>
//             </header>
//             <br/>
//             <img className='divBackground' src='passport.jpg' alt='books'/>
//             <div className='map'><h1>Map</h1></div>
//             <p className='middle-left'>
//                 1)&nbsp Talk About the type of cases you handle (h1b1, marriage cases, naturalization, etc.)
//                 <br/>
//                 2) &nbspInsert Picture Here &nbsp &nbsp &nbsp Talk about yourself/experience briefly and include law school
//                 <br/>
//                 Request a Consultation <br/>
//                 <input type='text' placeholder='Name'/><br/>
//                 <input type='text' placeholder='E-mail'/><br/>
//                 <input type='text' placeholder='Phone Number'/><br/><br/>
//                 <input className='message' type='text' placeholder='Message'/><br/>
//                 4)  &nbspInsert Google Maps Location Here&nbsp  Allows people to find you on google maps if you want it
//                 <br/><br/><br/>
//             </p>
//             <p><button className='logo'>En Español</button></p>

//             <mapComponent/>            
            
//             {/* <Map className='gmap' google={this.props.google} zoom={14}>
//             <Marker onClick={this.onMarkerClick}
//             name={'Current location'} />
//             <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
//             </Map> */}

//             <section></section>
//             <div className='words'>
//               <p>Contact Information:
//                 <p className='contact'>Address:xxx &nbsp &nbsp &nbsp 
//                 Phone:xxx &nbsp &nbsp &nbsp 
//                 Email:xxx
//                  </p>
//               </p>
//             </div>
//         </div>
//         )
//     }

// }

// export default App;

// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyA0wWqbGDTQum__FJsDqplkubn6vvGCblM')
//   })(App)

function Map() {
    
    return (
        <GoogleMap 
        defaultZoom={17} 
        defaultCenter={{lat: 40.715610, lng: -74.005480}}  
        >
        {<Marker key={'305'} position={{lat: 40.715610, lng: -74.005480}}/>}
        </GoogleMap>
   
        
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
    return <div style={{width: '80vw', height: '80vh'}}> 
        <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{height: '100%'}}/>}
        containerElement={<div style={{height: '100%'}}/>}
        mapElement={<div style={{height: '100%'}}/>}
        />
         
         </div>
}

