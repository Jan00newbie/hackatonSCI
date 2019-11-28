import React from 'react'

import style from './event.module.scss'

import boast from '../../../../img/boast.svg'

const Event = ({title, image, description}) => {
    const date = "23.23.1900"
    const h = 19
    const city = 'Szczecin'
    return (
        <div className={style.grid}>
            <img src={image} className={style.image} alt=""/>
            <h2 className={style.title}>{title}</h2>
            <p className={style.meta}>
                czas: <span className='crucial__info'>{date}</span>.r godz.<span className='crucial__info'>{h}</span><br/>
                okolice:<span className='crucial__info'>{city}</span>
            </p>
            <img className={style.boast} src={boast} alt="ozdoba"/>
            {description ?(<p className={style.description}>{description}</p>):''}
            <button className={style.button}>Zobacz więcej</button>
        </div>
    )
}

export default Event
