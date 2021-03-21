import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'

import {userRegisterReducer } from '../src/reducers/userReducer'
///import { userBarberListReducer } from './reducers/userBarberReducer'
import { userBarberListReducer } from "../src/reducers/userBarberReducer"
import {addAppointmentDetailsReducer} from "../src/reducers/appointmentReducer.js"

const reducer = combineReducers({
    userRegister: userRegisterReducer, 
    userBarberList: userBarberListReducer,
    addAppointmentDetails: addAppointmentDetailsReducer
})

const initialState={}
const middleware=[thunk]


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store