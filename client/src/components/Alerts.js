import React, {useContext} from 'react'
import { Alert } from './Alert'
import alertContext from '../context/alert/alertContext'

const style = {
    display:'flex',
    flexDirection: 'column',
    zIndex: '1000',
    position:'relative',
    top: 80,
    left: 10
}

export const AlertsList = () => {
    const {alerts} = useContext(alertContext)
    
    console.log(!!alerts, alerts);
    
    return (
        <div style={style}>
            {!!alerts ?<Alert {...alerts}/> :''} 
        </div>
    )
}