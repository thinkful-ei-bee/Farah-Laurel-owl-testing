import React from 'react';

export default function Participants(props){
  console.log(props);
  const participants = props.users; 
  const inSessionArr = participants.filter(participant => participant.inSession === true);
  const outOfSessionArr = participants.filter(participant => participant.inSession === false);

    const inSessionHTML = inSessionArr.map(user => {
      return (  
        <div className="participant-box">
          <img src={user.avatar} className="user-logo" alt="logo" />  
          <span className="participant-name">{user.name}</span>
          <p>{user.inSession}</p>  
      </div> 
      )
    })
    return inSessionHTML;
}
      