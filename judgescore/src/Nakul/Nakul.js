import React, {Component} from 'react';
import JudgesTableScore from '../JudgesTableScore/JudgesTableScore';

class Nakul extends Component {
    render(){
        return(
            <div className="">
               <input type="hidden" value="Nakul" id="judgeName"/>
                Nakul
                <JudgesTableScore/>
            </div>
        )
    }
}

export default Nakul;