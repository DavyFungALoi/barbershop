import React from 'react'

const LoginScreen = () => {
    return (
        <div>
        <form>
            <label for='email'>Email</label>
            <input type = 'text' id='email'></input>
            <label for='password'>Password</label>
            <input type = 'text' id='password'></input>
            <button type='submit'>Login</button>
        </form>
    </div>
    )
}

export default LoginScreen