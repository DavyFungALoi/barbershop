import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { userRegister} from "../actions/userActions"


const RegisterScreen = () => {

    const dispatch = useDispatch()


    return (
        <div>
            <div>Please Register</div>
        <form>
            <label for='name'>Name</label>
            <input type = 'text' id='name'></input>
            <label for='email'>Email</label>
            <input type = 'text' id='email'></input>
            <label for='password'>Password</label>
            <input type = 'text' id='password'></input>
            <button type='submit'>Register</button>
        </form>
    </div>
    )
}

export default RegisterScreen