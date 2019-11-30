import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import Modal from '../../Layout/Modal/Modal'
import Login from '../Main/Login/Login'
import Register from '../Main/Register/Register'


const ModalSwitch = () => {
    const location = useLocation()
    return (
        <Modal>
            <Switch location={location}>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Modal>)
}

export default ModalSwitch
