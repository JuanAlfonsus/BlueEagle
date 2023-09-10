import { SET_USER_DISTANCE, SET_USER_PRICE } from './actionType'

export const setUserDistance = (payload) => {
    return {
        type: SET_USER_DISTANCE,
        payload
    }
}

export const setUserTotal = (payload) => {
    return {
        type: SET_USER_PRICE,
        payload
    }
}