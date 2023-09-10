import { createStore } from 'redux'
import { SET_USER_DISTANCE, SET_USER_PRICE } from './actions/actionType'

const initialState = {
    distance: 0,
    origin: '',
    destination: '',
    total: 0
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
            console.log(state)
            return {
                ...state,
                total: action.payload
            }

        default:
            return state
    }
}

const store = createStore(userReducer)

export default store