import React, {Component} from 'react';
import JudgesTableScore from '../JudgesTableScore/index';

class Nakul extends Component {
    render(){
        return(
            <div className="">
               <input type="hidden" value="Nakul" id="judgeName"/>
       
                <JudgesTableScore/>
            </div>
        )
    }
}

export default Nakul;