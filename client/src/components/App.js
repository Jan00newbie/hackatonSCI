import React, {Fragment} from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import Header from './Layout/Header/Header'

import Main from './Routes/Main'

import SiteNotFound from './Routes/SiteNotFound'
import Events from './Routes/Events/Events'
import Login from './Routes/Login/Login'
import Register from './Routes/Register/Register'

const App = () => {
    const location = useLocation();
    
    const background = location.state && location.state.background
    console.log(background);
    
    return (
        <Fragment>
            <Header />
            <div className="container">
                {background && 
                    (<Switch location={location}>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                    </Switch>)
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
