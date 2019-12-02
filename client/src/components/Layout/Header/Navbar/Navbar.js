import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()

    return (
        <nav >
            <div className='shadow nav__link'>
                <Link to={{
                    state: { modal: { ...location, pathname: '/login' } }
                }}>
                    zaloguj
                </Link>
            </div>
            <div className='shadow nav__link'>
                <Link to={{
                    state: { modal: { ...location, pathname: '/register' } }
                }}>
                    dołącz
                </Link>
            </div>
            <div className='shadow nav__link'>
                <Link to="/events">
                    eventy
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
