import React from 'react'

export const Alert = ({messages, type}) => 
    {
        console.log(messages, type);
        
        return <div className={`alert alert__box--${type}`}>
            {messages.map((message, index) => <p key={index}>{message}</p>)}
        </div>;
    }