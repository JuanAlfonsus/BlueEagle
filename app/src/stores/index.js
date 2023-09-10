import { createStore } from 'redux'
import { SET_USER_DISTANCE, SET_USER_PRICE, SET_FLEET_NAME, SET_FLEET_ID } from './actions/actionType'

const initialState = {
    distance: 0,
    origin: '',
    destination: '',
    total: 0,
    fleetName: '',
    fleetId: -1
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DISTANCE:
            const { distance, origin, destination } = action.payload
            let newDistance = distance.split(' km')
            newDistance = Math.ceil(newDistance[0])
            return {
                ...state,
                distance: newDistance,
                origin,
                destination
            }

        case SET_USER_PRICE:
            return {
                ...state,
                total: action.payload
            }

        case SET_FLEET_NAME:
            return {
                ...state,
                fleetName: action.payload
            }

        case SET_FLEET_ID:
            return {
                ...state,
                fleetId: action.payload
            }

        default:
            return state
    }
}

const store = createStore(userReducer)

export default store