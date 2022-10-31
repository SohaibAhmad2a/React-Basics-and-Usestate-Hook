//THIS PROGRAM IS ALMOST SAME AS APP.JS, THE ONLY DIFFERENCE IS WE DONOT WANT TO GET DATA IN FORM OF PARAGRAPH

import React,{useEffect} from 'react';
import axios from 'axios';

function App_(){
    const [state,changeState]=React.useState([]);
    useEffect(()=>{
        axios.get("https://www.reddit.com/r/reactjs.json").then((resi)=>{
            const newPosts = resi.data.data.children.map((objt)=>objt.data);
            changeState(newPosts);
        });
    },[]);
    return state.map((objet)=>{return objet.title});
}
export default App_;