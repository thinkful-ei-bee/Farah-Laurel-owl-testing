import React, { Component } from 'react';
import './App.css';
import Participants from './components/participants';

class App extends Component {
  static defaultProps = {
    STORE: {
      participants: [],
      chatEvents: [],
    }
  };

  render() {
    const { STORE } = this.props
    return (
      <main className = 'App'>
        <header className = 'App-header'>
        </header> 
        <Participants 
          users = {STORE.participants} //name of prop is users 
        /> 
      </main>
      );
    }
  }
     

export default App;
