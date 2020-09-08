
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const containerStyle = {
//     width: '400px',
//     height: '400px'
//   };
   
//   const center = {
//     lat: -3.745,
//     lng: -38.523
//   };
   
//   function mapComponent() {
//     const [map, setMap] = React.useState(null)
   
//     const onLoad = React.useCallback(function callback(map) {
//       const bounds = new window.google.maps.LatLngBounds();
//       map.fitBounds(bounds);
//       setMap(map)
//     }, [])
   
//     const onUnmount = React.useCallback(function callback(map) {
//       setMap(null)
//     }, [])
   
//     return (
//       <LoadScript
//         googleMapsApiKey="YOUR_API_KEY"
//       >
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={10}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//         >
//           { /* Child components, such as markers, info windows, etc. */ }
//           <></>
//         </GoogleMap>
//       </LoadScript>
//     )
//   }
   
//   export default React.memo(mapComponent)

import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { useState } from 'react';

const libraries = ['places'];
const mapContainerStyle = {
  // width: '34vw',
  // height: '34vh',
  // position: 'absolute',
  // margin: 'auto',

  // width: '33%',
  // height: '33%',
  // position: 'relative',
  // left: '-50%'

  position: 'absolute',
  
  
  left: '50%',
  /* make the top edge of .inner appear in the vertical center of .outer */
  top: '50%',
 
  /* move .inner up by half of its height so that its middle is in the middle of .outer */
  transform: 'translate(-50%, -50%)',
  
  height: '93%',
  width: '80%',
 
  
}
const center = {
  lat: 40.715610, 
  lng: -74.005480
}

const updatedLocation = {
  lat: 40.715500,
  lng: -74.005420
}

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  fullscreenControl: true
}

function GMap () {
  const [toggleInfoWindow, setToggleInfoWindow] = useState(false);

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <GoogleMap
      mapContainerStyle={mapContainerStyle}
      // zoom={14.9}
      zoom={14.9}
      center={center}
      options={options}
      >
      
      <Marker 
      position={updatedLocation}
      onClick={() => setToggleInfoWindow(!toggleInfoWindow)}
      />

      { toggleInfoWindow &&
      <InfoWindow
      position={updatedLocation}
      onCloseClick={() => setToggleInfoWindow(false)}
      >
        <div>
        <h5>
          Law Office of Carlos E. Lugo
          <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ⚖️
        </h5>
        </div>
      </InfoWindow> 
      
      }
      </GoogleMap>
      
    
    </div>
  )
}

export default GMap;