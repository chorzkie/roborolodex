import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { Robots } from './Robots';
import './App.css';
import Scroll from '../components/Scroll';

class App extends React.Component {
    constructor()  {
        super();
        this.state = {
            Robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {

        const searchedRobots = this.state.Robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(this.state.Robots.length === 0) {
            return (
                <div className= 'tc f1'>
                    <h1>Loading...</h1>
                </div>
            )
        }
        else {
            return (
                <div className= 'tc'>
                    <h1 className= 'f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList Robots = {searchedRobots}/>
                    </Scroll>
                </div>
            )
        }
   
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then(users => {
            this.setState({ Robots: users });
        });
    }
}


export default App;