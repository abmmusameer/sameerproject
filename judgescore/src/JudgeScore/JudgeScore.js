import React, {Component} from 'react';
import axios from 'axios';

import bgvideo from './judgetbl.mp4';
import './JudgeScore.css';

class JudgeScore extends Component {
    constructor(props){
        super(props);
        this.state = {
            persons: [],
            teamId: ''        
        } 
    }

    componentDidMount() {
        this.loadData();
        //setInterval(() => window.location.reload(),30000); 
        // setInterval(this.loadData(),1000);
    }
    async loadData() {
        try { 
            const res = await fetch('https://danceusadance.us/test/live_voting/getScore');
//            const res = await fetch('http://localhost/projects/dud/site/live-voting/live_voting/getScore');
            const responseData = await res.json();
            const persons = responseData.score;
            console.log(responseData,persons,responseData.status === 1);
             if(persons ){
//                 console.log(responseData.team_name)
                        if(responseData.status === 1 && persons.length === 3){ console.log(persons.length,persons);
                           axios.post('https://danceusadance.us/test/live_voting/showOnTableScreen', {
//                            axios.post('http://localhost/projects/dud/site/live-voting/showOnTableScreen', {
                                teamId: responseData.team_name             
                             }).then(res => {                
                                console.log(res);                            
                            })
                        }
                        this.setState({ persons });
                        // setInterval(() => this.setState({ persons }), 200);
                }
                
        } catch (e) {
          console.log(e);
      }
    }

    render(){ 
        return(
            <div className="judgeScorewrap"> 
                <div className="fullscreenVideo">
                    <video className='videoTag' autoPlay loop muted >
                        <source src={bgvideo} type='video/mp4' />
                    </video>
                </div>
                <ul className="judgeScorepanel">                
                    {this.state.persons.map(person => <li key={person.judgeName}>{person.totalScore}</li>)}
                </ul>          
            </div>
        );
    };
};

export default JudgeScore;