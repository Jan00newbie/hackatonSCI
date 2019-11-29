import React, { useState } from 'react'
import style from './register.module.scss'
import AuthFormWraper from '../../Layout/AuthFormWraper'


const Register = () => {
    
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
                <button onClick={handleSubmit}>Zarejestruj</button>
            </form>
        </AuthFormWraper>
    )
}

export default Register
