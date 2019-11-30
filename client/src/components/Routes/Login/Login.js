import React, { useState, Fragment } from 'react'
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
        <Fragment>
            Imie: <input type="text" name="name" onChange={handleChange}  value={input.name}/>
            Hasło: <input type="password" name="password" onChange={handleChange} value={input.password}/>
            <button onClick={handleSubmit}>Zaloguj</button>
        </Fragment>
    )
}

export default Login
