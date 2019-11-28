import React, { useState } from 'react'

import style from './filters.module.scss'

const Filters = () => {
    const [input, setInput] = useState({
        name:'',
        city: '',
        data: ''
    })
    
    const handleChange = e => {
        e.preventDefault()
        setInput({...input, [e.target.name]: e.target.value})
    }

    return (
        <div className={style.container}>
            <h2 className={style.title}>Wyszukaj</h2>
            <label className={style.label} htmlFor="name">
                Nazwa
                <input className={style.input} type="text" name='name' placeholder='Proszę wpisz nazwę...'/>
            </label>

            <label className={style.label} htmlFor="name">
                Miasto
                <input className={style.input}type="text" placeholder='Proszę wpisz nazwę...'/>
            </label>
            
            <label className={style.label} htmlFor="name">
                Data
                <input className={style.input} type="text" placeholder='Proszę wpisz nazwę...'/>
            </label>
        </div>
    )
}

export default Filters
