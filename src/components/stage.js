import React from 'react';
import STORE from './components/STORE';


export default function Stage(props){
    const userOnStage = participants.filter(participant => participant.onStage === true);

    const onStageHTML = userOnStage.map(user => {
        return (
        <section className="main-stage"> {/* section for entire stage */}
            <div className="participant-stage"> {/* div for each person */}
                <div className="participant-name">{/* div for person name*/}
                    <p>{props.name}</p>
                </div> 
                <img src={props.avatar} className="App-logo" alt="logo" />  
            </div>
        </section>
        )
    })
    return onStageHTML;
}