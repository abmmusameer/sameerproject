import React, { Component } from 'react';

import Judgetablescore from '../src/JudgesTableScore/JudgesTableScore';
import JudgeScore from '../src/JudgeScore/JudgeScore';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Judgetablescore/>
       <JudgeScore/>
      </div>
    );
  }
}

export default App;
