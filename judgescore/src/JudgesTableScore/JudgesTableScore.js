import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './JudgesTableScore.css';

class Judgetablescore extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedOption: '',
            technique: 0,
        }
    }
    
    //select option
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });        
        if (selectedOption) {
            document.querySelector('.selectedTeamname').textContent = selectedOption.label;            
        }
    }
    render(){
        const { selectedOption } = this.state;
        return(
            <section className="judgesTablePanel">
              <div className="container">
                <figure>
                    <div>Lauren</div>
                </figure> 
                <div className="team_select">
                    <Select
                        name="form-field-name"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={[
                            { value: 'one', label: 'One' },
                            { value: 'two', label: 'Two' },
                            { value: 'three', label: 'Three' },
                        ]}
                    />
                    <p className="selectedTeamname">Team 1</p>
                </div>

                <div className="categoryPanel">
                    <div className="row">
                        <div className="col-8">Technical Presentation</div>
                            <div className="col-4">
                            <input type="text" 
                            name="techPresentation" 
                            id="techPresentation" 
                            value={this.state.techPresentation} onChange={this.handlechange}/></div>
                            <ul>
                                <li>
                                    <label>
                                        Technique
                                        <input type="text" name="technique" id="technique" placeholder="0"
                                        
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
