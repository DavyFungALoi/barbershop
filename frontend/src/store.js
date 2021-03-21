import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'

import {userRegisterReducer } from '../src/reducers/userReducer'
import { userBarberListReducer } from './reducers/userBarberReducer'

const reducer = combineReducers({
    userRegister: userRegisterReducer, 
    userBarberList: userBarberListReducer
})

const initialState={}
const middleware=[thunk]


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store