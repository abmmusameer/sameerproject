import React, {Component} from 'react';
import axios from 'axios';

import './JudgesTableScore.css';

class Judgetablescore extends Component{
    constructor(props){
        super(props);

        this.state = {                    
            selectTeam: '',
            technique: '',
            synchronization: '',
            execution: '',
            formations: '',
            presentation: '',
            choreography: '',  
            musicinterpretation: '',  
            appearance: '',
            technicalPres: '',
            artisticPres: ''           
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        
        
    }


    handleChange(event) {  
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({[name]: value});       
    }


    handleFormSubmit(event) {
        event.preventDefault();        
        let judge_name = this.state.judge_name;
        let selectTeam = this.state.selectTeam;
        let technique = this.state.technique;
        let synchronization = this.state.synchronization;
        let execution = this.state.execution;
        let formations = this.state.formations;

        let presentation = this.state.presentation;
        let choreography = this.state.choreography;
        let musicinterpretation = this.state.musicinterpretation;
        let appearance = this.state.appearance; 
        
        let technicalPres = 0;
         
        let artisticPres = 0;
    
        let totalScore = 0;

        const judgecal = this;

        axios.post('https://danceusadance.us/test/live_voting/saveScore', {
            judge_name: "judge_name",
            selectTeam : selectTeam,
            technique : technique,
            synchronization : synchronization,
            execution : execution,
            formations : formations,
            presentation : presentation,
            choreography : choreography,
            musicinterpretation : musicinterpretation,
            appearance : appearance, 
            technicalPres: technicalPres,
            artisticPres: artisticPres,
            totalScore : totalScore
        })            
            .then(res => {                
                console.log(res);
                judgecal.setState({judge_name: '', selectTeam: '', technique: '', synchronization: '',
                execution: '', formations: '', presentation: '', choreography: '', musicinterpretation: '',
                appearance: '',technicalPres: '', artisticPres:'', totalScore: '',
                });
                window.location.reload();
            })

            
    }


    render(){
        const selectTeamName = this.state.selectTeam;
        const technicalPres = +this.state.technique + +this.state.synchronization + +this.state.execution 
                            + +this.state.formations;
        const artisticPres = +this.state.presentation + +this.state.choreography + +this.state.musicinterpretation
                            + +this.state.appearance;
        const totalScore = technicalPres + artisticPres;

        return(
            <section className="judgesTablePanel">
              <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <figure>
                        <div>Lauren</div>
                    </figure> 
                    <div className="team_select">
                        <select
                            name="selectTeam"
                            value={this.state.selectTeam}
                            id="selectTeam"
                            onChange={this.handleChange}>
                            <option value="Team Select">Team Select</option>
                            <option value="one">One</option>
                            <option value="two">two</option>
                            <option value="three">three</option>
                        </select>
                     <input type="text" name="selectoption" id="selectoption" value={selectTeamName} />
                    </div>
                    <div className="categoryPanel">
                        <div className="row">
                            <div className="col-8">Technical Presentation</div>
                                <div className="col-4">
                                {technicalPres}
                                </div>
                                <ul>
                                    <li>
                                        <label>
                                            Technique
                                            <input type="text" name="technique" id="technique"
                                            placeholder="0" value={this.state.technique}
                                            onChange={this.handleChange}
                                            />  
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            Synchronization
                                            <input type="text" name="synchronization" id="synchronization" 
                                            placeholder="0" value={this.state.synchronization}
                                            onChange={this.handleChange}                                        
                                            />
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            Execution
                                            <input type="text" name="execution" id="execution"
                                                placeholder="0" value={this.state.execution}
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            Formations
                                            <input type="text" name="formations" id="formations"
                                                placeholder="0" value={this.state.formations}
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                    </li>
                                </ul>
                        </div>

                        <div className="row">
                            <div className="col-8">Artistic Presentation</div>
                            <div className="col-4">                        
                                {artisticPres}
                            </div>
                            <ul>
                                <li>
                                    <label>
                                        Presentation
                                        <input type="text" name="presentation" id="presentation"
                                            placeholder="0" value={this.state.presentation}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        Choreography
                                        <input type="text" name="choreography" id="choreography"
                                            placeholder="0" value={this.state.choreography}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        Music Interpretation
                                        <input type="text" name="musicinterpretation" id="musicinterpretation"
                                            placeholder="0" value={this.state.musicinterpretation}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        Appearance
                                        <input type="text" name="appearance" id="appearance"
                                            placeholder="0" value={this.state.appearance}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="totalScorepanel">
                        <div className="totalScoreField">
                            <label>
                                Total Score
                                <input type="text" name="totalScore" value={totalScore}/>
                            </label>
                        </div>
                    </div>
                    <button type="submit">
                        Submit Score
                    </button>
                </form>
              </div>

            </section>
        );
    }

    
}

export default Judgetablescore;
