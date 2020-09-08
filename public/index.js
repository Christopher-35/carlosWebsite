/* global google */
import React from 'react'; 
import { render } from 'react-dom';
import App from '../client/app.js';
import ReactDOM from 'react-dom'
console.log('app', App);


//with script and withgMap is scripts for map to work properly
// import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
// function Map () {
//   return ( 
    
//     <GoogleMap 
//     defaultZoom={10}  //default zoom = how far should map be zoomed 
//     defaultCenter={{lat: 40.715610, lng: -74.005480}} //default center = position of map when it loads
//     />
//   )
// }

// // const WrappedMap = withScriptjs(withGoogleMap(Map));
// const WrappedMap = withScriptjs(withGoogleMap((props) => {
//   <GoogleMap
//   defaultZoom={10}  //default zoom = how far should map be zoomed 
//   defaultCenter={{lat: 40.715610, lng: -74.005480}}
//   />
// }))

// function FutureApp () {
//   return (
//     <div style={{width: '20vw', height: '20vh'}}>
//       <WrappedMap 
//       googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
//       loadingElement={<div style={{ height: `100%` }} />}
//       containerElement={<div style={{ height: `100%` }} />}
//       mapElement={<div style={{ height: `100%` }} />}

//       />
//     </div>
//   )
// }



// import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
// import { useState } from 'react';

// const libraries = ['places'];
// const mapContainerStyle = {
//   width: '34vw',
//   height: '34vh'
// }
// const center = {
//   lat: 40.715610, 
//   lng: -74.005480
// }

// const updatedLocation = {
//   lat: 40.715500,
//   lng: -74.005420
// }

// const options = {
//   disableDefaultUI: true,
//   zoomControl: true,
//   fullscreenControl: true
// }

// function FutureApp () {
//   const [toggleInfoWindow, setToggleInfoWindow] = useState(false);

//   const {isLoaded, loadError} = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
//     libraries
//   });

//   if (loadError) return 'Error loading maps';
//   if (!isLoaded) return 'Loading Maps';

//   return (
//     <div>
//       <GoogleMap
//       mapContainerStyle={mapContainerStyle}
//       // zoom={14.9}
//       zoom={14.9}
//       center={center}
//       options={options}
//       >
      
//       <Marker 
//       position={updatedLocation}
//       onClick={() => setToggleInfoWindow(!toggleInfoWindow)}
//       />

//       { toggleInfoWindow &&
//       <InfoWindow
//       position={updatedLocation}
//       onCloseClick={() => setToggleInfoWindow(false)}
//       >
//         <div>
//         <h5>
//           Law Office of Carlos E. Lugo
//           <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           ⚖️
//         </h5>
//         </div>
//       </InfoWindow> 
      
//       }
//       </GoogleMap>
      
    
//     </div>
//   )
// }



render(<App/>, document.getElementById('app'));