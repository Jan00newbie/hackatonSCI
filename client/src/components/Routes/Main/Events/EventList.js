import React from 'react'
import Event from './Event/Event'

const EventList = ({events}) => {
    return (
        <div>
            {events.map((event, index)=>(
                <Event key={index} {...event} />
            ))}
        </div>
    )
}

export default EventList
