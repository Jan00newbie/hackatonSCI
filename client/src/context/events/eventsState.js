import React, {useReducer, useContext} from 'react';

import request from '../../utils/request';

import alertContext from '../alert/alertContext';
import authContext from './authContext';
import authReducer from './eventsReducer';

import {
    GET_EVENTS,
    UPDATE_EVENT,
    REMOVE_EVENT
} from '../types'


const AuthState = props => {
    const initialState = {
        isAuthenticated: !!localStorage.getItem('token'),
        user: null,
        error: null
    }
    const [state, dispath] = useReducer(eventReducer, initialState)
    
    const { setAlert } = useContext(alertContext)

    const handleRequestError = ({payload, type}) => {
        setAlert(payload, type)
        logoutHandler()
    }

    const logoutHandler = () => {
        dispath({type: LOGOUT})
    }

    const authHandler = userLoginData => {
        
        const header = {
            method:'POST',
            body: JSON.stringify(userLoginData)
        }
        
        request('/auth', header)
        .then(data => {
            
            if (!data.token){
                throw new Error('Problem with authentication! Please log again')
            }
            dispath({type: AUTH_SUCCESS, payload:data.token})
        })
        .catch(handleRequestError);
    }

    const registerHandler = userRegisterData => {
        
        const header = {
            method:'POST',
            body: JSON.stringify(userRegisterData)
        }
        
        request('/user', header)
        .then(data => {
            
            if (!data.token){
                throw new Error('Problem with registration! Please try again')
            }
            
            dispath({type: AUTH_SUCCESS, payload:data.token})
        })
        .catch(handleRequestError);
    }

    const loadUserHandler = () => {
        const header = {
            headers:{
                "Authorization": `Brearer ${localStorage.getItem('token')}`
            }
        };

        request('/user', header)
        .then(data => {
            dispath({type: LOAD_USER, payload:data})
        })
        .catch(handleRequestError);
    }
    return (
        <authContext.Provider value={{
            auth: authHandler,
            loadUser: loadUserHandler,
            isAuthenticated: state.isAuthenticated,
            user:state.user,
            logout: logoutHandler,
            register: registerHandler
        }} >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState