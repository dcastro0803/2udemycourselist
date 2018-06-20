import React, { Component } from 'react';
import logo from './myLogoFilled2.png';
import './App.css';
import Card from '../Card/Card';
import CardList from '../Card/CardList';
import { courses } from '../courses';

// not required to be like this
class App extends Component {
  render() {
    return (
      // create a component for header 
      <div className="App tc">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Website </h1>
          <p> "Daniel Castro - Software Developer" </p>
        </header>
        <p id='textalone'> The following are some of the courses I have taken: </p>
        <CardList courses={courses} />
      </div>
    );
  }
}

export default App;
