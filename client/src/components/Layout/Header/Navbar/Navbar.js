import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    const links = ['events', 'xd', 'login']
    return (
        <nav style={{width:'250px'}}>
            <div className='shadow nav__link'>
                <Link to={{
                    pathname:`/login`,
                    state: {background:location}}}>
                        Login
                </Link>
            </div>
            <div className='shadow nav__link'>
                <Link to="/events">
                    Events
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
