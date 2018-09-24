import React, { Component } from 'react';
import Slide from './Components/Slide';
import Features from './Components/Features'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slide></Slide>
        <Features></Features>
      </div>
    );
  }
}

export default App;
