import React, {Component} from 'react';

import './JudgesTableScore.css';

class Judgetablescore extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedOption: '',
            technique: '',
            synchronization: '',
            execution: '',
            formations: '',
            presentation: '',
            choreography: '',  
            musicinterpretation: '',  
            appearance: ''
             
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }


    handleChange(event) {  
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({[name]: value});       
    }


    handleFormSubmit(event) {

    }


    render(){
        var selectoption = this.state.selectedOption;
        var technique = document.getElementById('technique');
        var synchronization = document.getElementById('synchronization');
        var execution = document.getElementById('execution');
        var formations = document.getElementById('formations');

        var presentation = document.getElementById('presentation');
        var choreography = document.getElementById('choreography');
        var musicinterpretation = document.getElementById('musicinterpretation');
        var appearance = document.getElementById('appearance');        


        var technicalPres = 0;
        var artisticPres = 0;

        
       
        if (technique != null && synchronization != null && execution != null && formations != null ) {          
            technique = document.getElementById("technique").value;
            synchronization = document.getElementById("synchronization").value;
            execution = document.getElementById("execution").value;
            formations = document.getElementById("formations").value;          
        }
        technicalPres = +technique + +synchronization + +execution + +formations

        if (presentation != null && choreography != null && musicinterpretation != null && appearance != null) {
            presentation = document.getElementById("presentation").value;
            choreography = document.getElementById("choreography").value;
            musicinterpretation = document.getElementById("musicinterpretation").value;
            appearance = document.getElementById("appearance").value;
        }
        artisticPres = +presentation + +choreography + +musicinterpretation + +appearance;
    
        var totalScore = +technicalPres + +artisticPres;

        return(
            <section className="judgesTablePanel">
              <div className="container">
         
                <figure>
                    <div>Lauren</div>
                </figure> 
                <div className="team_select">
                    <select
                        name="selectedOption"
                        value={this.state.selectedOption}
                        onChange={this.handleChange}>
                        <option value="Team Select">Team Select</option>
                        <option value="one">One</option>
                        <option value="two">two</option>
                        <option value="three">three</option>
                    </select>
                    {selectoption}
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
                                        onChange={this.handleChange.bind(this)}
                                        />  
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        Synchronization
                                        <input type="text" name="synchronization" id="synchronization" 
                                        placeholder="0" value={this.state.synchronization}
                                        onChange={this.handleChange.bind(this)}                                        
                                        />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        Execution
                                        <input type="text" name="execution" id="execution"
                                            placeholder="0" value={this.state.execution}
                                            onChange={this.handleChange.bind(this)}
                                        />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        Formations
                                        <input type="text" name="formations" id="formations"
                                            placeholder="0" value={this.state.formations}
                                            onChange={this.handleChange.bind(this)}
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
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </label>
                            </li>
                            <li>
                                <label>
                                    Choreography
                                    <input type="text" name="choreography" id="choreography"
                                        placeholder="0" value={this.state.choreography}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </label>
                            </li>
                            <li>
                                <label>
                                    Music Interpretation
                                    <input type="text" name="musicinterpretation" id="musicinterpretation"
                                        placeholder="0" value={this.state.musicinterpretation}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </label>
                            </li>
                            <li>
                                <label>
                                    Appearance
                                    <input type="text" name="appearance" id="appearance"
                                        placeholder="0" value={this.state.appearance}
                                        onChange={this.handleChange.bind(this)}
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
                            {totalScore}
                        </label>
                    </div>
                </div>
                <button type="button">
                    Submit Score
                </button>

              </div>

            </section>
        );
    }

    
}

export default Judgetablescore;
