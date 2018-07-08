import React, {Component} from 'react';
import JudgesTableScore from '../JudgesTableScore/JudgesTableScore';

class Matt extends Component {
    render(){
        return(
            <div className="">
               <input type="hidden" value="Matt" id="judgeName"/>
                Matt
                <JudgesTableScore/>
            </div>
        )
    }
}

export default Matt;