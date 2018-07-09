import React, {Component} from 'react';
import axios from 'axios';

import './JudgesTableScore.css';

class JudgesTableScore extends Component{
    constructor(props){
        super(props);

        this.state = { 
            judgeName: '',                   
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
        let judgeName = document.getElementById('judgeName').value;
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
            judgeName : judgeName,
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
                judgecal.setState({selectTeam: '', technique: '', synchronization: '',
                execution: '', formations: '', presentation: '', choreography: '', musicinterpretation: '',
                appearance: '',technicalPres: '', artisticPres:'', totalScore: '',
                });
                //window.location.reload();
                // window.location.href= "http://localhost:3000/JudgeScore";
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
              <div className="">
                <form onSubmit={this.handleFormSubmit}>
                    {/* <figure>
                        <div>Lauren</div>
                    </figure>  */}
                    <div className="teamSelect">                    
                        <select
                            className="inputField"
                            name="selectTeam"
                            value={this.state.selectTeam}
                            id="selectTeam"
                            onChange={this.handleChange}>
                            <option value="Team Select">Select Team</option>
                            <option value="1">DIVERSIONS</option>
                            <option value="2">NAVATMAN</option>
                            <option value="3">GURUS OF DANCE (JR)</option>
                            <option value="4">GROUND ZERO</option>
                            <option value="5">KRIYAA DANCE ACADEMY</option>
                            <option value="6">KRUTI DANCE ACADEMY</option>
                            <option value="7">NACH NATION</option>
                            <option value="8">AARAT</option>
                            <option value="9">PCIPA ROCKSTARS</option>
                            <option value="10">KARMA</option>
                            <option value="11">THE MOD PROJECT</option>
                            <option value="12">JULES PERFORMING ARTS</option>
                            <option value="13">SDFA JUNOON</option>
                            <option value="14">SAAZISH</option>
                            <option value="15">ARYA SENIOR</option>
                            <option value="16">WARRIOR SWAG</option>
                            <option value="17">NYC DANCE ARTS</option>
                            <option value="18">NITESHA KAUTHUVAM</option>
                            <option value="19">GURUS OF DANCE (SR)</option>
                            <option value="20">ATLANTA NRITYA ACADEMY</option>
                            <option value="21">GRACEFUL DANCERS</option>
                            <option value="22">NOTORIOUS</option>
                            <option value="23">SAAYA</option>
                            <option value="24">PREM DANCE ACADEMY</option>
                            <option value="25">BLUE FLAME</option>
                            <option value="26">TRIBE</option>
                            <option value="27">UNEXPECTED</option>
                        </select>
                        <br/>
                     <input type="hidden" className="inputField teamName" name="selectoption" id="selectoption" value={selectTeamName} />
                    </div>
                    <div className="categoryPanel">
                        <div className="row">
                        <div className="maincategoryCalc">
                            <div className="col-8">Technical Presentation</div>
                            <div className="col-4">
                                {technicalPres}
                            </div>
                        </div>
                                <ul className="categoryList">
                                    <li>
                                        <label>
                                            Technique
                                            <input type="text" className="inputField" name="technique" id="technique"
                                            placeholder="0" value={this.state.technique}
                                            onChange={this.handleChange}
                                            />  
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            Synchronization
                                            <input type="text" className="inputField" name="synchronization" id="synchronization" 
                                            placeholder="0" value={this.state.synchronization}
                                            onChange={this.handleChange}                                        
                                            />
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            Execution
                                            <input type="text" className="inputField" name="execution" id="execution"
                                                placeholder="0" value={this.state.execution}
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            Formations
                                            <input type="text" className="inputField" name="formations" id="formations"
                                                placeholder="0" value={this.state.formations}
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                    </li>
                                </ul>
                        </div>

                        <div className="row">
                        <div className="maincategoryCalc">
                            <div className="col-8">Artistic Presentation</div>
                            <div className="col-4">                        
                                {artisticPres}
                            </div>
                        </div>
                            <ul className="categoryList">
                                <li>
                                    <label>
                                        Presentation
                                        <input type="text" className="inputField" name="presentation" id="presentation"
                                            placeholder="0" value={this.state.presentation}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        Choreography
                                        <input type="text" className="inputField" name="choreography" id="choreography"
                                            placeholder="0" value={this.state.choreography}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        Music Interpretation
                                        <input type="text" className="inputField" name="musicinterpretation" id="musicinterpretation"
                                            placeholder="0" value={this.state.musicinterpretation}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        Appearance
                                        <input type="text" className="inputField" name="appearance" id="appearance"
                                            placeholder="0" value={this.state.appearance}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="totalScorepanel">
                        <div className="totalCalc">
                            <div className="col-8">Total Score</div>
                            <div className="col-4">                        
                                {totalScore}
                            </div>
                            <label>                             
                                {/* <input type="text" className="inputField" name="totalScore" value={totalScore}/> */}
                            </label>
                        </div>
                    </div>
                    <div className="btnGroup">
                        <button type="submit" className="submitBtn">
                            Submit Score
                        </button>
                    </div>
                </form>
              </div>

            </section>
        );
    }

    
}

export default JudgesTableScore;
