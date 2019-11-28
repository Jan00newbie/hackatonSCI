import React, {Fragment} from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import Header from './Layout/Header/Header'

import Main from './Routes/Main'

import SiteNotFound from './Routes/SiteNotFound'
import Events from './Routes/Events/Events'
import Login from './Routes/Login/Login'
import Modal from './Layout/Modal/Modal'

const App = () => {
    const location = useLocation();
    
    const background = location.state && location.state.background

    return (
        <Fragment>
            <Header />
            <div className="container">
                <Switch location={background || location}>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/events" component={Events}/>
                    <Route component={SiteNotFound}/>
                </Switch>

                {background && <Route path="/login" children={
                    <Modal>
                        <Login />
                    </Modal>
                }/>}
            </div>
        </Fragment>
    )
}


export default App
