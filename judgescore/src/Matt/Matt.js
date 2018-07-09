import React, {Component} from 'react';
import JudgesTableScore from '../JudgesTableScore/index';

class Matt extends Component {
    render(){
        return(
            <div className="">
               <input type="hidden" value="Matt" id="judgeName"/>
              
                <JudgesTableScore/>
            </div>
        )
    }
}

export default Matt;