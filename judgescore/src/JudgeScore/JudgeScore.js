import React, {Component} from 'react';
import axios from 'axios';

class JudgeScore extends Component {
    constructor(props){
        super(props);
        this.state = {
            persons: [],
            teamId: ''
        } 
    }

    componentDidMount() {
        axios.get('https://danceusadance.us/test/live_voting/getScore')
            .then(res => {                                
                const persons = res.data.score;
                if(res.data.status === 1){
                    axios.post('https://danceusadance.us/test/live_voting/showOnTableScreen', {
                        teamId: res.data.teamId             
                     })            
                        .then(res => {                
                            console.log(res);                            
                        })                      
                    this.setState({ persons });               
                    
                }                
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

export default JudgeScore;