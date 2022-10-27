//Importing react and react-dom
import React from 'react'; 
import ReactDOM from 'react-dom';
//const React=require('react'); This works too...
//const ReactDOM=require('react-dom');

import Steve from './Steve_Jobs.png';
import Imran from './Imran.jpg';
import './room.css';

//The below is in case of export of default type of BatiGate function https://www.w3schools.com/js/js_modules.asp 
import BatiGat from './BatiGate.js' //As this file is created by us so we need to specify its location too with ./
// The below is in case of name type export.
//import {BatiGate} from './BatiGate.js' 

function Hey(profss){
  return <div>
    <h1>Steve Jobs</h1> <br/>
    <strong>Hey! I am {profss.firstName} {profss.lastName}, Steve! Thanks for Building Apple Computers...</strong> <br/> 
    <h2>Awards:</h2>
    <ul>
      <li>Samuel S. Beard Award For Outstanding Public Service 35 Years Or Under </li>
      <li>National Medal of Technology and Innovation</li>
      <li>PGA Vanguard Award</li>
    </ul>
    <br/>
    <img src={Steve} alt="Image of Steve Jobs" title="Steve Job: Visionary Apple Co-founder"/><br/> 
  </div>
}

function Media(profs){
  return <div>
          <h2>{profs.title}</h2>
          <p>{profs.body}</p>
          <img src={profs.Imrani} alt="Chairman PTI" title="Chairman PTI: Imran Khan"/>
         </div>
}

function Gate(){
  const [openClose,setLit]=React.useState(); 
  return <div class={openClose === true ? 'light' : 'Dark'}> {/*class is made dynamic so that CSS styles apply to <div> element dynamically.*/}
            Gate is {openClose === true ? 'Open' : 'Close'}
            <button onClick={() => setLit(!openClose)}>  {/*onClick is an attribute it can't be named differently.*/}
               Flip 
            </button> 
         </div>;
}

ReactDOM.render(
  <div>
  <Hey firstName="Sohaib" lastName="Ahmad"/>
  <Media title="Media" body="Please subscribe to listen good music..." Imrani={Imran}/>
  <Gate />
  <BatiGat />
  </div>, //It is mandatory to use <div> element as more than one component is called by react.
  document.getElementById('root')
)