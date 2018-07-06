import React, {Component} from 'react';
import axios from 'axios';

class judgeScore extends Component {
    constructor(props){
        super(props);
        this.state = {
            persons: []
        } 
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render(){
        return(
            <div>            
                {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
            </div>
        );
    };
};

export default judgeScore;