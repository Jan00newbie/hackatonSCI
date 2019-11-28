import React, { Fragment } from 'react'

export const AuthFormWraper = ({children}) => {
    const history = useHistory()

    const handleBack = (e) =>{
        e.preventDefault()
        history.goBack()
    }
    return (
        <Fragment>
            {children}
            <button onClick={handleBack}>Zamknij</button>
        </Fragment>
    )
}
