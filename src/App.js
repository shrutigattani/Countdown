import React, { Component } from 'react';
import StopWatch from './Countdown.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Countdown></Countdown>
      </div>
    );
  }
}

export default App;
