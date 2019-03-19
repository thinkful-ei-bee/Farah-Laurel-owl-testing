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
          <h1> Trelloyes!</h1> 
        </header> 
        <div className = 'App-list'> 
        {STORE.map((participant) => ( 
          <Participants 
            key = {participant.id}
            cards = {
              list.cardIds.map(id => store.allCards[id])
            }
            />
          ))} 
        </div> 
      </main>
      );
    }
  }
     

export default App;
