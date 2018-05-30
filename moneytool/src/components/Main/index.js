import React, { Component } from "react";
import { Switch, Route} from 'react-router-dom';
import Mygoal from '../Mygoal/index';
import Home from '../Home/index';

class Main extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Mygoal" component={Mygoal}/>
                </Switch>
            </main>
        );
    }
} 

export default Main;