import React from 'react'

const RegisterScreen = () => {
    return (
        <div>
        <form>
            <label for='email'>Name</label>
            <input type = 'text' id='email'></input>
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