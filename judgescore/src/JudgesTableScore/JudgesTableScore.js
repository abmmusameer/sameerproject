import React, {Component} from 'react';

import './JudgesTableScore.css';

class Judgetablescore extends Component{
    render(){
        return(
            <section className="judgesTablePanel">
              <div className="container">
                <figure>
                    <div>Lauren</div>
                </figure> 
                <div className="team_select">
                    <select>
                        <option value="">Team 1</option>
                        <option value="">Team 1</option>
                        <option value="">Team 1</option>
                        <option value="">Team 1</option>
                        <option value="">Team 1</option>
                        <option value="">Team 1</option>
                        <option value="">Team 1</option>
                        <option value="">Team 1</option>
                        <option value="">Team 1</option>
                        <option value="">Team 1</option>
                    </select>
                    <p>Team 1</p>
                </div>

                <div className="categoryPanel">
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
