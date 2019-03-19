import React from 'react';

export default function Participants(props){
  const participants = props.users; 
  const inSessionArr = participants.filter(participant => participant.inSession === true);
  const outOfSessionArr = participants.filter(participant => participant.inSession === false);

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
      