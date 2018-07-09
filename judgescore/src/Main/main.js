import React, { Component } from "react";
import { Switch, Route} from 'react-router-dom';
import Judgetablescore from '../JudgesTableScore/index';
import JudgeScore from '../JudgeScore/JudgeScore';
import Lauren from '../Lauren/Lauren';
import Matt from '../Matt/Matt';
import Nakul from '../Nakul/Nakul';

class Main extends Component {
    render() {
        return(
            <div className="bodyPanel">
                <main>
                    <Switch>
                        <Route exact path="/" component={Judgetablescore}/> 
                        <Route path="/Lauren" component={Lauren}/>
                        <Route path="/Matt" component={Matt}/>
                        <Route path="/Nakul" component={Nakul}/>
                        <Route path="/JudgeScore" component={JudgeScore}/>
                    </Switch>
                </main>
            </div>
        );
    }
} 

export default Main;