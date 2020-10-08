import React, { useEffect } from 'react';
import './practiceareas.css';

const PracticeAreas = () => {
  console.log('in resources')
  useEffect ( () => {
  
    document.body.style.background = "white center center";
    // document.body.style.webkitBackgroundSize = "cover";
    // document.body.style.mozBackgroundSize = "cover";
    // document.body.style.oBackgroundSIze = "cover";
    // document.body.style.backgroundSize = "cover";
    // document.body.style.opacity = ".9";
   
  }, ) 
  return (
    <React.Fragment>
    <br/><br/><br/><br/><br/><br/>
    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Hello Carlos! This is the Practice Areas Page</h1>
    <br/><br/><br/><br/>
    
    <h2>
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Please Let me know what you want me to put here</h2>
    
    </React.Fragment>
  )
}

export default PracticeAreas;