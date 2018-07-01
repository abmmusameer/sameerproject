import React, {Component} from 'react';

import './JudgesTableScore.css';

class Judgetablescore extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedOption: '',
            synchronization: '',
            technique: ''
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

    //select option
    // handleSelectChange = (selectedOption) => {
    //     this.setState({ selectedOption });        
    //     if (selectedOption) {
    //         document.querySelector('.selectedTeamname').textContent = selectedOption.label;            
    //     }
        
    // }



    handleFormSubmit(event) {

    }


    render(){
        var selectoption = this.state.selectedOption;
        var technique; 
        var synchronization;
    
        var technicalPres;
       
        if (document.getElementById('technique') != null && document.getElementById('synchronization') != null) {          
            technique = document.getElementById("technique").value;
            synchronization = document.getElementById("synchronization").value;
            technicalPres = technique + synchronization;
        }
    
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
                            </ul>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            Category 1
                        </div>
                        <div className="col-4">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            Category 1
                        </div>
                        <div className="col-4">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            Category 1
                        </div>
                        <div className="col-4">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            Category 1
                        </div>
                        <div className="col-4">
                            <input type="text"/>
                        </div>
                    </div>
                </div>

                <div className="totalScorepanel">
                    <div className="totalScoreField">
                        <label>
                            Total Score
                            <input type="text"/>
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
