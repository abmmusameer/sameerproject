import React, { Component } from 'react';

import Header from '../Header/Header';
import Main from '../Main/main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
       <Header/>
       <Main/>
      </div>
    );
  }
}

export default App;
