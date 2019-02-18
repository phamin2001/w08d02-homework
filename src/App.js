import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username:'',
      logged: false
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.logged ? <MainContainer /> : <Login  />}
      
      </div>
    );
  }
}

export default App;
