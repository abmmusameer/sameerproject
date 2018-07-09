import React, {Component} from 'react';
import JudgesTableScore from '../JudgesTableScore/index';

class Lauren extends Component {
    render(){
        return(
            <div className="">
               <input type="hidden" value="Lauren" id="judgeName"/> 
                <JudgesTableScore/>
            </div>
        )
    }
}

export default Lauren;