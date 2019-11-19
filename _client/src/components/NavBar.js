import React, { Fragment } from 'react'

export const NavBar = ({seed}) => {
    
    return (
        <Fragment>
            {navItems.map(link => (
                <li key={link}>
                    <Link to={`/${link}`}>{link}</Link>
                </li>
            ))}
        </Fragment>
    )
}
