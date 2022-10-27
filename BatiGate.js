import React from 'react'; 

function BatiGate(){
    const [Store,State]=React.useState();
    return <div class={Store ? 'light':'Dark'}>
      Gate is {Store === true ? 'Open' : 'Close'}
      <button onClick={()=> {if(Store!==true){State(!Store)}}}>Turn On</button>
      <button onClick={()=> {if(Store!==false){State(!Store)}}}>Turn Off</button>
    </div>
  }
  export default BatiGate; //This is an export of default type https://www.w3schools.com/js/js_modules.asp" 
  
  /* "INCASE YOU WANT TO USE NAME TYPE EXPORT::::::::::
  function BatiGate(){    
    const [Store,State]=React.useState();
    return <div class={Store ? 'light':'Dark'}>
      Gate is {Store === true ? 'Open' : 'Close'}
      <button onClick={()=> {if(Store!==true){State(!Store)}}}>Turn On</button>
      <button onClick={()=> {if(Store!==false){State(!Store)}}}>Turn Off</button>
    </div>
  }
  export {BatiGate}; // Name type export*/
