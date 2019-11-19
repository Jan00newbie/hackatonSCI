import React, {useReducer} from 'react';

import AlertContext from "./alertContext";
import alertReducer from './alertReducer';

import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'
import { ERROR, WARNING, NOTICE } from './alertTypes';


const AlertState = props => {

    const initialState = null;

    const [state, dispath] = useReducer(alertReducer, initialState);
    
    const setAlertHandler = (messages, type = NOTICE) => {
        console.log(messages, type);
        
        const id = Math.floor(Math.random() * 1000)
        
        const alert = {
            id,
            messages,
            type
        }

        dispath({type: SET_ALERT, payload: alert});

        setTimeout(() => {
            dispath({type: REMOVE_ALERT});
        }, 5000);
    }
    
    return (
        <AlertContext.Provider value={{
            setAlert: setAlertHandler,
            alerts: state
        }} >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState