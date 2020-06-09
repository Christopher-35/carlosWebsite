import React from 'react'; 
import { render } from 'react-dom';
import App from '../client/app.js';
import ReactDOM from 'react-dom'
console.log('app', App);
render(<App/>, document.getElementById('app'));