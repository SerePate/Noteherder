import React from 'react'
import './SignIn.css'
import {auth,googleProvider} from './base'

const SignIn = ({handleAuth}) => {
    const authenticate = () => {
        auth.signInWithPopUp(googleProvider)
        .then(handleAuth)
    }

    return(
        <div className="SignIn">
        <h1>SIGN IN</h1>
        <button onClick={handleAuth}>Sign In</button>
        </div>
    )
}

export default SignIn