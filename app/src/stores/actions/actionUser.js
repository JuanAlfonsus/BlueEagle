import { SET_USER_DISTANCE, SET_USER_PRICE, SET_FLEET_NAME, SET_FLEET_ID } from './actionType'

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

export const setFleetId = (payload) => {
    return {
        type: SET_FLEET_ID,
        payload
    }
}