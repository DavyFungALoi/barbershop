import React from 'react'

const LoginForm = () => {
    return (
        <div>
            <form>
                <label for='email'>Email</label>
                <input type = 'text' id='email'></input>
                <label for='password'>Password</label>
                <input type = 'text' id='password'></input>
            </form>
        </div>
    )
}

export default LoginForm
