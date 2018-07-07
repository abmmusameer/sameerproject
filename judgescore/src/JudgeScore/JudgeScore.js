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
        axios.get('https://danceusadance.us/test/live_voting/getScore')
            .then(res => {                                
                const persons = res.data.score;
                console.log(res);
                this.setState({ persons });
            })
    }

    render(){
        return(
            <div>            
                {this.state.persons.map(person => <li key={person.judgeName}>{person.totalScore}</li>)}
            </div>
        );
    };
};

export default judgeScore;