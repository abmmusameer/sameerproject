import React, {Component} from 'react';
import JudgesTableScore from '../JudgesTableScore/JudgesTableScore';

class Lauren extends Component {
    render(){
        return(
            <div className="">
               <input type="hidden" value="Lauren" id="judgeName"/>
               Lauren
                <JudgesTableScore/>
            </div>
        )
    }
}

export default Lauren;