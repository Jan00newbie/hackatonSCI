import React from 'react'
import Modal from './Modal/Modal'
import { useHistory } from "react-router-dom";

const AuthFormWraper = ({children}) => {
    const history = useHistory()

    const handleBack = (e) =>{
        e.preventDefault()
        history.goBack()
    }
    
    return (
        <Modal>
            {children}
            <button onClick={handleBack}>Zamknij</button>
        </Modal>
    )
}


export default AuthFormWraper 