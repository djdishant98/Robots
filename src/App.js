import React from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'
import ErrorBoundary from "./Error";
import Scroll from "./Scroll";


class App extends React.Component {
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(users=>{
            this.setState({robots:users})
        })
    }

    onSearchChange = (event) =>{
        this.setState({searchfield : event.target.value});
    }

    render(){
        const fiin=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    return(
        <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox sc={this.onSearchChange}/>
        <Scroll>
        <CardList robots={fiin}/>
        </Scroll>
        </div>
    );
}
}

export default App;