import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './style.css';

class Header extends Component {
    render(){
        return(
            <div className="header">
                <div className="">                    
                    <div className="menu">
                        <ul>
                            <li><Link to='/build/'>Home</Link></li>
                            <li><Link to='/build/Lauren'>Lauren</Link></li>                
                            <li><Link to='/build/Matt'>Matt</Link></li>
                            <li><Link to='/build/Nakul'>Nakul</Link></li>
                            <li><Link to='/build/JudgeScore'>Table Score</Link></li>                                       
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;