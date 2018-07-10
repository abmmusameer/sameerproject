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
                        <Route exact path="/build/" component={Judgetablescore}/> 
                        <Route path="/build/Lauren" component={Lauren}/>
                        <Route path="/build/Matt" component={Matt}/>
                        <Route path="/build/Nakul" component={Nakul}/>
                        <Route path="/build/JudgeScore" component={JudgeScore}/>
                    </Switch>
                </main>
            </div>
        );
    }
} 

export default Main;