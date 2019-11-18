import React from 'react'

export const Alert = ({messages, type}) => 
    <div className={`alert alert__box--${type}`}>
        {messages.map((message, index) => <p key={index}>{message}</p>)}
    </div>;