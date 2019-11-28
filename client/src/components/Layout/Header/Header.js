import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import logo from '../../../img/logo.svg'

const style = {
    padding: '.5em 1em',
    backgroundColor: '#388E3C',
    display:'flex',
    justifyContent: 'space-between'
}

const Header = () => {
    return (
        <header style={style}>
            <Link to="/">
                <img id="logo" src={logo} alt="logo"/>
            </Link>
            <Navbar />
        </header>
    )
}

export default Header
