import React from 'react';

export default function Stage(props){
    return (
        <section> {/* section for entire stage */}
            <div> {/* div for each person */}
                <div>{/* div for person name*/}
                    <p>{props.name}</p>
                </div> 
                <img src={props.avatar} className="App-logo" alt="logo" />  
            </div>
        </section>
    )
}