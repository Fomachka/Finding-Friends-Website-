import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            humans: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({humans: users}));    
    }

    onSearchChange = (event) => {
        //Changes state of the search engine
        //typed value is printed in a console
        this.setState({searchfield: event.target.value});
    }


    render(){
        const filteredHumans = this.state.humans.filter(human =>{
            return human.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.humans.length === 0){
            return <h1>Loading</h1>
        }
            return(
                <div className='tc'>
                    <h1 className='f1'> Human Friends </h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll> 
                    <CardList humans = {filteredHumans}/>
                </Scroll>    
                </div>
                
            );
    }
}

export default App;