import React, { Fragment } from 'react'

import Header from './Layout/Header/Header'
import ModalSwitch from './Routes/Modal/ModalSwitch'
import MainSwitch from './Routes/Main/MainSwitch'

const App = () =>
    (<Fragment>
        <Header />
        <ModalSwitch />
        <MainSwitch />
    </Fragment>)

export default App
