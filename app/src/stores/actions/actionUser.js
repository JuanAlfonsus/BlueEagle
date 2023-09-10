import { SET_USER_DISTANCE, SET_USER_PRICE, SET_FLEET_NAME } from './actionType'

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

export const setFleetName = (payload) => {
    return {
        type: SET_FLEET_NAME,
        payload
    }
}