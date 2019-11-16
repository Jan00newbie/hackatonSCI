
import {SET_ALERT, REMOVE_ALERT} from '../types'

const alertReducer = (state, change) => {
    switch (change.type) {
        case SET_ALERT:
            return change.payload
              
        case REMOVE_ALERT:
            return null

        default:
            break;
    }
}

export default alertReducer