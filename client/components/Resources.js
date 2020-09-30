import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { ziplyne, Jabord, Jinglz, Semantic, TalkBox, H1, BMS, Equities } from '../company-bio';
import { zLogo, jaLogo, jinLogo, sLogo, tLogo, hLogo, bLogo, eLogo } from '../company-bio';
import { zImg, jaImg, jinImg, sImg, tImg, hImg, bImg, eImg } from '../company-bio';
import { zDates, jaDates, jinDates, sDates, tDates, hDates, bDates, eDates } from '../company-bio';
import { zFound, jaFound, jinFound, sFound, tFound, hFound, bFound, eFound } from '../company-bio';
import { bigStyle } from '../company-bio';

// import './rAnimations.css';
import './resources.css';

class Resources extends Component {

  constructor(props) {
    super(props);

    this.state = {
        bigStyle: bigStyle,
        buttonOpacity: [1, .4, .4, .4, .4, .4, .4, .4, .4],
        progressColor: ['white', '#007bff', '#007bff', '#007bff', '#007bff', '#007bff', '#007bff', '#007bff'],
        currentPage: ['1'],
        companyBio: [ziplyne, Jabord, Jinglz, Semantic, TalkBox, H1, BMS, Equities],
        currentBio: ziplyne,
        companyLogo: [zLogo, jaLogo, jinLogo, sLogo, tLogo, hLogo, bLogo, eLogo],
        currentLogo: zLogo,
        companyImage: [zImg, jaImg, jinImg, sImg, tImg, hImg, bImg, eImg],
        currentImage: zImg,
        foundedDates: [ zDates, jaDates, jinDates, sDates, tDates, hDates, bDates, eDates ],
        currentDates: zDates,
        allFounders: [zFound, jaFound, jinFound, sFound, tFound, hFound, bFound, eFound],
        currentFounders: zFound
    };
       
    this.toggleNav = this.toggleNav.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.prevButtonClick = this.prevButtonClick.bind(this);
    this.nextButtonClick = this.nextButtonClick.bind(this);

}


toggleNav () {
    document.querySelector('.navbar').classList.toggle('navbar--open');
}

onButtonClick (num) {
    let statecopy = [...this.state.buttonOpacity];
    for (let i = 0; i < statecopy.length; i++){
        if (i===num){
            statecopy[i] = 1;
        } else {
            statecopy[i] = .4;
        }
    }

    let colorCopy = [...this.state.progressColor];
    for (let i = 0; i < colorCopy.length; i++){
        if (i===num){
            colorCopy[i] = 'white';
        } else {
            colorCopy[i] = '#007bff';
        }
    }

    let pageCopy = [...this.state.currentPage];
    pageCopy[0] = `${num+1}`;

    let bioCopy = [...this.state.companyBio];
    bioCopy = bioCopy[num];

    let logoCopy = [...this.state.companyLogo];
    logoCopy = logoCopy[num];

    let imgCopy = [...this.state.companyImage];
    imgCopy = imgCopy[num]

    let datesCopy = [...this.state.foundedDates];
    datesCopy = datesCopy[num];

    let founderCopy = [...this.state.allFounders];
    founderCopy = founderCopy[num];
    
    this.setState({
        buttonOpacity: statecopy,
        progressColor: colorCopy,
        currentPage: pageCopy,
        currentBio: bioCopy,
        currentLogo: logoCopy,
        currentImage: imgCopy,
        currentDates: datesCopy,
        currentFounders: founderCopy
    })
}

prevButtonClick () {
    let pageCopy = [...this.state.currentPage];

    if (pageCopy[0]==='1'){
      pageCopy[0] = '8';
    } else {
      let int = parseInt(pageCopy[0]);
      pageCopy[0] = `${int-1}`;
    }

    let index = parseInt(pageCopy[0]);
    --index;

    this.onButtonClick(index);

    this.setState({
      currentPage: pageCopy,
    })
}

nextButtonClick () {
    let pageCopy = [...this.state.currentPage];

    if (pageCopy[0]==='8'){
      pageCopy[0] = '1';
    } else {
      let int = parseInt(pageCopy[0]);
      pageCopy[0] = `${int+1}`;
    }

    let index = parseInt(pageCopy[0]);
    --index;

    this.onButtonClick(index);

    this.setState({
      currentPage: pageCopy,
    })
}


render () {
   const currentImgCopy = this.state.currentImage.slice(0, 4);
   const currentLogoCopy = this.state.currentLogo.slice(0, 2);


   const foundedDatesCopy = [...this.state.foundedDates];
   let currentDateCopy = this.state.currentDates;         
       //Might     experience  an  error
    if (currentDateCopy === foundedDatesCopy[0]){
        currentDateCopy = 'zDate';
    } else if (currentDateCopy === foundedDatesCopy[1]) {
        currentDateCopy = 'jaDate';
    } else if (currentDateCopy === foundedDatesCopy[2]) {
        currentDateCopy = 'jinDate';
    } else if (currentDateCopy === foundedDatesCopy[3]) {
        currentDateCopy = 'sDate';
    } else if (currentDateCopy === foundedDatesCopy[4]) {
        currentDateCopy = 'tDate';
    } else if (currentDateCopy === foundedDatesCopy[5]) {
        currentDateCopy = 'hDate';
    } else if (currentDateCopy === foundedDatesCopy[6]) {
        currentDateCopy = 'bDate';
    } else if (currentDateCopy === foundedDatesCopy[7]) {
        currentDateCopy = 'eDate';
    }

    const foundersCopy = [...this.state.allFounders];
    let currentFounder = this.state.currentFounders;

    if (currentFounder === foundersCopy[0]){
        currentFounder = 'zFound';
    } else if (currentFounder === foundersCopy[1]){
        currentFounder = 'jaFound';
    } else if (currentFounder === foundersCopy[2]){
        currentFounder = 'jinFound';
    } else if (currentFounder === foundersCopy[3]){
        currentFounder = 'sFound';
    } else if (currentFounder === foundersCopy[4]){
        currentFounder = 'tFound';
    } else if (currentFounder === foundersCopy[5]){
        currentFounder = 'hFound';
    } else if (currentFounder === foundersCopy[6]){
        currentFounder = 'bFound';
    } else if (currentFounder === foundersCopy[7]){
        currentFounder = 'eFound';
    } 

    const allBios = [...this.state.companyBio];
    let onlyBio = this.state.currentBio;

    if (onlyBio === allBios[0]){
        onlyBio = 'zPar';
    } else if (onlyBio === allBios[1]){
        onlyBio = 'jaPar';
    } else if (onlyBio === allBios[2]){
        onlyBio = 'jinPar';
    } else if (onlyBio === allBios[3]){
        onlyBio = 'sPar';
    } else if (onlyBio === allBios[4]){
        onlyBio = 'tPar';
    } else if (onlyBio === allBios[5]){
        onlyBio = 'hPar';
    } else if (onlyBio === allBios[6]){
        onlyBio = 'bPar';
    } else if (onlyBio === allBios[7]){
        onlyBio = 'ePar';
    } 


    return (
        <div>
        {/* <div className='scroll-pic fade-position'><Mouse  className='scroll-pic'/></div> */}
      
        {/* <a href=''> 
        <img className='homeLogo'  src='brickLogo.png' alt='company logo'   />
        </a> */}
        {/* <a>
        <img className='menuIcon' src='hamburger.png' onClick={this.toggleNav}  />
        </a> */}
        
        
       
        <div className='firstHalfOfPage'>     
        {/* <img className='jBrickman' src='jBrickman.png' alt='company ceo'/> */}
        <div className='homeBackground'>
        {/* <div className='jBrief'>
        I’m a Growth Company Executive with<b className='bold'> 25 plus
        <br></br> years of experience</b> starting, leading and <br/> building successful B2B SaaS companies<br/>
        across a variety of industries. Let’s talk about<br/> your sales and business challenges and how 
        <br/>I can help you grow your business.
        </div> */}
        {/* <p className='botWords'> COMPANY STORIES </p> */}
        </div>

        </div>
          {/* <div className='grid-container'> */}
          {/* <div className="topLeft"> */}
            {/* <img className={currentLogoCopy} src={`${this.state.currentLogo}`}/>
            <p className={currentDateCopy}>{this.state.currentDates}</p>
            <p className={currentFounder}>{this.state.currentFounders}</p>
            <p className={onlyBio}>
            {this.state.currentBio}
            </p> */}
          {/* </div> */}

            {/* <div className="topRight">
                <img className={currentImgCopy} src={`${this.state.currentImage}`}/>
                <ProgressBar>
                <ProgressBar style={{backgroundColor: this.state.progressColor[0]}} className='ziplyne' now={10} key={1} />
                <ProgressBar style={{backgroundColor: this.state.progressColor[1]}} now={9} key={2} />
                <ProgressBar style={{backgroundColor: this.state.progressColor[2]}} now={8} key={3} />
                <ProgressBar style={{backgroundColor: this.state.progressColor[3]}} now={14} key={4} />
                <ProgressBar style={{backgroundColor: this.state.progressColor[4]}} now={10} key={5} />
                <ProgressBar style={{backgroundColor: this.state.progressColor[5]}} now={7} key={6} />
                <ProgressBar style={{backgroundColor: this.state.progressColor[6]}} now={13} key={7} />
                <ProgressBar style={{backgroundColor: this.state.progressColor[7]}} now={15} key={8} />
                </ProgressBar>
            </div> */}

            {/* <div className="botLeft">
              <p className='botLeftText'>Meet The Team</p>
            </div> */}

            {/* <div className="botMiddle"> */}
            {/* <a onClick={()=> this.prevButtonClick()} className="previous round">&#8249;</a>
            <p className='currentPage'>0{this.state.currentPage[0]} / 08</p>
            <a onClick={()=> this.nextButtonClick()} className="next round">&#8250;</a> */}
            {/* </div> */}
            
            {/* <div className="botRight">
            <ButtonGroup className='button-group' aria-label="Button Group">
                <Button className='a-button' style={{opacity: this.state.buttonOpacity[0]}} onClick={()=> this.onButtonClick(0)} size='lg'>Ziplyne</Button>
                <Button className='a-button' style={{opacity: this.state.buttonOpacity[1]}} onClick={()=> this.onButtonClick(1)} size='lg'>Jabord</Button>
                <Button className='a-button' style={{opacity: this.state.buttonOpacity[2]}} onClick={()=> this.onButtonClick(2)} size='lg'>Jinglz</Button>
                <Button className='a-button' style={{opacity: this.state.buttonOpacity[3]}} onClick={()=> this.onButtonClick(3)} size='lg'>SemanticMD</Button>
                <Button className='a-button' style={{opacity: this.state.buttonOpacity[4]}} onClick={()=> this.onButtonClick(4)} size='lg'>TalkBox</Button>
                <Button className='a-button' style={{opacity: this.state.buttonOpacity[5]}} onClick={()=> this.onButtonClick(5)} size='lg'>H1.</Button>
                <Button className='a-button' style={{opacity: this.state.buttonOpacity[6]}} onClick={()=> this.onButtonClick(6)} size='lg'>BMS Capital</Button>
                <Button className='a-button' style={{opacity: this.state.buttonOpacity[7]}} onClick={()=> this.onButtonClick(7)} size='lg'>equities.com</Button>
                <Button className='all-companies' size='sm'>ALL COMPANIES</Button>
            </ButtonGroup>
            </div>               */}
          {/* </div> */}
        </div>
    )
}

}

export default Resources;