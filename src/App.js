import React, { Component } from 'react';
import './resources/styles/App.css';
import HomeContainer from './components/Home/HomeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomeContainer/>
        </header>
      </div>
    );
  }
}

export default App;
