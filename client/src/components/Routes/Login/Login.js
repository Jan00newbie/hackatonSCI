import React, { useState } from 'react'

import AuthFormWraper from '../../Layout/AuthFormWraper'

import style from './login.module.scss'

const Login = () => {
    
    const [input, setInput] = useState({
        name:'',
        password: ''
    })

    const handleChange = (e) =>{
        e.preventDefault()
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('logging ...')
    }

    return (
        <AuthFormWraper>
            <form className={style.form}>
                Imie: <input type="text" name="name" onChange={handleChange}  value={input.name}/>
                Hasło: <input type="password" name="password" onChange={handleChange} value={input.password}/>
                <button onClick={handleSubmit}>Zaloguj</button>
            </form>
        </AuthFormWraper>
    )
}

export default Login
