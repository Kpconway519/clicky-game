import React, { Component } from 'react';
import './App.css';
import MainHeading from "./components/Header/index"
import GameBoard from "./components/GameBoard/index"
class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeading />
        <GameBoard />
      </div>
    );
  }
}

export default App;
