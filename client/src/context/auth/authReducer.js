import {
    AUTH_SUCCESS,
    LOAD_USER,
    LOGOUT
} from '../types';

export default (state, change) => {
    switch (change.type) {

        case AUTH_SUCCESS:  
            localStorage.setItem('token', change.payload)
            return {
                ...state,
                isAuthenticated: true
            }

        case LOAD_USER:
            return {
                ...state,
                user:change.payload
            };
    
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        
        default:
            throw new Error("Bad action!")
    }
};