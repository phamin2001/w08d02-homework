import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      logged: false,
      username: ''
    }
  }

  handleLogin = (username) => {
    this.setState({
      logged: true,
      username: username
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
      
        {this.state.logged ? <MainContainer /> : <Login handleLogin={this.handleLogin} />}
      
      </div>
    );
  }
}

export default App;
