import React, {Fragment} from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import Header from './Layout/Header/Header'

import Main from './Routes/Main'

import SiteNotFound from './Routes/SiteNotFound'
import Events from './Routes/Events/Events'
import Login from './Routes/Login/Login'
import Register from './Routes/Register/Register'
import Modal from './Layout/Modal/Modal'

const App = () => {
    const location = useLocation();
    
    const modal = location.state && location.state.modal
    
    return (
        <Fragment>
            <Header />
            <div className="container">
                {modal && 
                    (<Modal>
                        <Switch location={modal}>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                        </Switch>
                    </Modal>)
                }
                <Switch location={location}>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/events" component={Events}/>
                    <Route component={SiteNotFound}/>
                </Switch>
            </div>
        </Fragment>
    )
}


export default App
