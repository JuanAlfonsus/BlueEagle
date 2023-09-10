import { SET_USER_DISTANCE } from './actionType'

export const setUserDistance = (payload) => {
    return {
        type: SET_USER_DISTANCE,
        payload
    }
}