import React, { Component } from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Main from '../Main/index';

import './style.css';
import '../../styles/fonts.css';
import '../../styles/global.css';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
