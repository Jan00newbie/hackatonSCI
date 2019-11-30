import React, { useState, Fragment } from 'react'
import style from './login.module.scss'

const Login = () => {

    const [input, setInput] = useState({
        name: '',
        password: ''
    })

    const handleChange = (e) => {
        e.preventDefault()
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('logging ...')
    }

    return (
        <form className={style.form}>
            <label htmlFor="name">
                Imie: <input type="text" name="name" onChange={handleChange} value={input.name} />
            </label>
            <label htmlFor="name">
                Hasło: <input type="password" name="password" onChange={handleChange} value={input.password} />
            </label>
            <button onClick={handleSubmit}>Zaloguj</button>
        </form>
    )
}

export default Login