import React from 'react';
import STORE from './components/STORE';

export default function Participants(props){
    const inSessionArr = STORE.participants.filter(participant => participant.inSession);

    return (  
      <div>
          <h3>{props.name}</h3>
          <p>{props.inSession}</p>
          <img src={props.avatar} className="App-logo" alt="logo" />  
      </div>
       
    )
}
      