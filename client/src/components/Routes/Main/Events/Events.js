import React, { Fragment } from 'react'
import Filters from './Filter/Filters'
import EventList from './EventList'

import image from '../../../../img/1.jpg'

const style = {
    display: 'grid',
    gridTemplateAreas: `
        'filter list'
    `,
    gridTemplateColumns: '3fr 8fr',
    gap: '40px'
}

const seed = [{
    title: "Kolacja wigilijna",
    image,
    description: "Zapraszam wszystkich chętny na spędzenie wspólnej wigilii ..."
}, {
    title: "Kolacja wigilijna",
    image,
    description: "Zapraszam wszystkich chętny na spędzenie wspólnej wigilii ..."
}, {
    title: "Kolacja wigilijna",
    image,
    description: "Zapraszam wszystkich chętny na spędzenie wspólnej wigilii ..."
}, {
    title: "Kolacja wigilijna",
    image,
    description: "Zapraszam wszystkich chętny na spędzenie wspólnej wigilii ..."
}]

const Events = () => {
    return (
        <Fragment>
            <div style={style}>
                <Filters />
                <EventList events={seed} />
            </div>
        </Fragment>
    )
}

export default Events
