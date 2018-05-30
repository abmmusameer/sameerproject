import React, { Component } from "react" ;
import { Link } from "react-router-dom";

import './style.css';

class Header extends Component {
    render(){
        return(
            <div className="header">
                <div className="container">
                    <div className="logo"></div>
                    <div className="menu">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/Mygoal'>My goals</Link></li>                
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;