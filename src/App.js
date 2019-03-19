import React, { Component } from 'react';
import Participants from './components/participants';

class App extends Component {
  static defaultProps = {
    STORE: {
      participants: [],
      chatEvents: [],
    }
  };

  render() {
    console.log(this.props);
    const { STORE } = this.props
    return (
      <main className = 'App'>
        <header className = 'App-header'>
        </header> 
        <p>Hello world</p>
        <Participants 
          users = {STORE.participants} //name of prop is users 
        /> 
      </main>
      );
    }
  }
     

export default App;
