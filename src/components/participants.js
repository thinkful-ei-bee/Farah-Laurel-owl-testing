import React from 'react';
import STORE from './components/STORE';

export default function Participants(props){
    const inSessionArr = STORE.participants.filter(participant => participant.inSession === true);
    const outOfSessionArr = STORE.participants.filter(participant => participant.inSession === false);

    const inSessionHTML = inSessionArr.map(user => {
      return (  
        <div className="participant-box">
          <img src={props.avatar} className="user-logo" alt="logo" />  
          <span className="participant-name">{props.name}</span>
          <p>{props.inSession}</p>
            
      </div> 
      )
    })
    return inSessionHTML;
}
      