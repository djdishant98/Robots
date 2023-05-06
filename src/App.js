import React ,{useState,useEffect}from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'
import ErrorBoundary from "./Error";
import Scroll from "./Scroll";


function App(){
 

    const [robots,setRobots]=useState([]);
    const [searchfield,setSearchfield]=useState('');
    const [count,setCount]=useState(0);

  

    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{return response.json();})
    .then(users=>{setRobots(users)});
    console.log(count);
    console.log(robots,searchfield);
},[count])

   const onSearchChange = (event) =>{
        setSearchfield(event.target.value);
    }

        const fiin=robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
    return(
        <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        <SearchBox sc={onSearchChange}/>
        <Scroll>
        <CardList robots={fiin}/>
        </Scroll>
        </div>
    );
}


export default App;