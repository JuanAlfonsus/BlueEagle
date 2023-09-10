import { createStore } from 'redux'
import { SET_USER_DISTANCE } from './actions/actionType'

const initialState = {
    distance: 0,
    origin: '',
    destination: ''
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DISTANCE:
            const { distance, origin, destination } = action.payload
            return {
                ...initialState,
                distance,
                origin,
                destination
            }

        default:
            return state
    }
}

const store = createStore(userReducer)

export default store