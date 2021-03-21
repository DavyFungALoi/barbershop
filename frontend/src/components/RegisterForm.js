import React from 'react'

const RegisterForm = () => {
    return (
        <div>
            <div>Register now</div>
        <form>
            <label for='email'>Email</label>
            <input type = 'text' id='email'></input>
            <label for='password'>Password</label>
            <input type = 'text' id='password'></input>
        </form>
    </div>
    )
}

export default RegisterForm
