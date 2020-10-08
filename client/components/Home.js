import React, {useEffect, useRef} from 'react';
import GMap from '../gMaps';
import SubmitForm from './Form';
import './home.css'

// const Home = () => {
//   <React.Fragment>

//     <div className='about-me'>
//       <div className='who'>
//         <p className='who-title'>{this.state.introTitles[0]}</p>
//         <p className='who-p'>{this.state.introParagraphs[0]}</p>
//       </div>
//       <div className='what-table'>
//         <p className='what-title'>{this.state.introTitles[1]}</p>
//         <p className='what-p'>{this.state.introParagraphs[1]}</p>
//       </div>
//       <div className='what-done'>
//         <p className='d-title'>{this.state.introTitles[2]}</p>
//         <p className='d-p'>{this.state.introParagraphs[2]}</p>
//       </div>
//     </div>

//     <img className='passport_gavel' src='passport.jpg' alt='passport and gavel'></img>

//     <div className='home-clients'>
//       <img className='cool_logo' src='carlos.jpg' alt='logo' />
//     </div>

//     <div className='home-blog'>
//       <SubmitForm className='user_form' formData={this.state.formData} formMute={this.state.formMute} />
//     </div>
    
//     <div className='map-section'>
//       <div className='GMap_Copy'>Map Replacement For API Call</div>
//       {/* <GMap className='GMap'></GMap> */}
//     </div>
    
//     <div className='contactInfo'> 
//       <p className='info1'>Contact Information:</p>
//       <p className='info2'>
//         <b className='bold_word'>Address:&nbsp;</b> 305 Broadway Suite 1001 New York, NY 10007
//       </p>
//       <p className='info3'> <b className='bold_word'>Tel:&nbsp;</b> 1-917-402-7410 </p>
//       <p className='info4'><b className='bold_word'>Fax:&nbsp;</b> 1-646-304-9247 </p>
//     </div>
//   </React.Fragment>
// }
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const scrollToTop = () => window.scrollTo(0, 0);

 const Home = ( {langs} ) => {

  const myRef = useRef(null);

  const useScroll = () => scrollToRef(myRef);  

  useEffect ( () => {
    console.log('state', langs);
    if (langs.showInfo === 'contact'){
      useScroll();
    } else if (langs.showInfo === 'home') {
      scrollToTop();
    }

    document.body.style.background = "url('./passport.jpg') center center fixed";
    // document.body.style.webkitBackgroundSize = "cover";
    // document.body.style.mozBackgroundSize = "cover";
    // document.body.style.oBackgroundSIze = "cover";
    // document.body.style.backgroundSize = "cover";
    // document.body.style.opacity = ".9";

    
   
  }, ) 
 
  return (
      <div className='_hbackground'>
      {/* {console.log('state', langs)} */}

           <div id="scroll-home" className='about-me'>
       <div className='who'>
         <p className='who-title'>{langs.introTitles[0]}</p>
         <p className='who-p'>{langs.introParagraphs[0]}</p>
       </div>
       <div className='what-table'>
         <p className='what-title'>{langs.introTitles[1]}</p>
         <p className='what-p'>{langs.introParagraphs[1]}</p>
       </div>
       <div className='what-done'>
         <p className='d-title'>{langs.introTitles[2]}</p>
         <p className='d-p'>{langs.introParagraphs[2]}</p>
       </div>
     </div>

     {/* <img className='passport_gavel' src='passport.jpg' alt='passport and gavel'></img> */}

     <div className='home-clients'>
       <img className='cool_logo' src='carlos.jpg' alt='logo' />
     </div>

     <div className='submit_div'>
       <SubmitForm className='user_form' formData={langs.formData} formMute={langs.formMute} />
     </div>
    
     <div className='map-section'>
       <div className='GMap_Copy'>Map Replacement For API Call</div>
       {/* <GMap className='GMap'></GMap> */}
     </div>
    
    <div ref={myRef} id='contact-info' className='contactInfo'> 
      <div className='_contact1'>{langs.contactInfo[0]}</div>
      <div className='_contact2'>
      <p >
        <b style={{letterSpacing: '1px'}}>{langs.contactInfo[1]}&nbsp;</b> 
        {langs.contactInfo[2]}
      </p>
      <p > 
        <b style={{letterSpacing: '1px'}}>{langs.contactInfo[3]}&nbsp;</b> 
        {langs.contactInfo[4]}
      </p>
      <p>
        <b style={{letterSpacing: '1px'}}>{langs.contactInfo[5]}&nbsp;</b> 
        {langs.contactInfo[6]} 
        </p>
      </div>

      {/* <p className='info1'>{langs.contactInfo[0]}</p>
      <p className='info2'>
        <b className='bold_word'>{langs.contactInfo[1]}&nbsp;</b> 
        {langs.contactInfo[2]}
      </p>
      <p className='info3'> 
        <b className='bold_word'>{langs.contactInfo[3]}&nbsp;</b> 
        {langs.contactInfo[4]}
      </p>
      <p className='info4'>
        <b className='bold_word'>{langs.contactInfo[5]}&nbsp;</b> 
        {langs.contactInfo[6]} 
      </p> */}
    </div>
    </div>
  )
 

};

export default Home;