//THE PROGRAM FETCHES DATA FROM REDDIT API

import React,{useState, useEffect} from 'react';
import axios from 'axios';
function App(){
    const [post,setPosts]=useState([]);                                                     
//You must pass on an empty array in order to specify the data type of post.

    const [count,setCount]=useState();                                                  
//Just to make the program move interactive
    useEffect(()=>{
        axios.get("https://www.reddit.com/r/reactjs.json").then((resi)=>{ 
// axios.get is called to fetch the data from Reddit’s API, which returns a promise, and the .then handler will get called once the fetch is finished. 

            const newPosts = resi.data.data.children.map((objt)=>objt.data);
{/*object(named resi)->object(named data)->object(named data)->Array(named Childrem).Children is an array of objects, map function here will return the array of objects also
named data.*/}
{/*const newPosts = resi.data.data.children.map(function Sohaib(objt){return objt.data}); You can use this too, whichever is convenient for you.*/}

            setPosts(newPosts);
        });
    },[count]); 
//If you don't want to associate fetching with any event, which here is change in value of count, then you can use empty array. 
//console.log("To check how many times data is fetched");

    return <div>
        <h1>React Posts</h1>
        <ol> 
{/*You can use '{' instead of '(' after => in arrow function, but then you will need to use return keyword because you want to return which will be rendered.*/}
            {post.map(posts=>(
                    <li key={posts.id}> {/*if you don't use key attribute, then it will not effect the program */}
                    <a href={posts.url}>{posts.title}</a>, 
                    {posts.author}
                </li>
                )
                )}
        </ol>
        <button onClick={()=>setCount(!count)}>Increase the Counter by 2</button>
    </div>
}

export default App;