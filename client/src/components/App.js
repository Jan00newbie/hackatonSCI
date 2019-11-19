import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './Layout/Header/Header'

import Main from './Routes/Main'

const App = () => {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <Switch>
                    <Route location="/" component={Main}/>
                </Switch>
            </div>
        </Fragment>
    )
}


export default App
