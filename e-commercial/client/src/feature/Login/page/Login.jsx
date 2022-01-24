import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import "./login.scss"
import {login} from "../loginSlice"
function Login() {
    const [loginInfo, setLoginInfo] = useState({
        username : "",
        password: "",
    })
    const dispatch = useDispatch();
    const onUserChange = (e) =>{
        setLoginInfo({...loginInfo , username : e.target.value})
    }
    const onPasswordChange = (e) =>{
        setLoginInfo({...loginInfo , password : e.target.value})
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(login(loginInfo));
    }
    return (
        <div className='login__page'>
            <div className="login__logo">
                <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/logo_ZLKBetlBR.svg?updatedAt=1639053395891"
                 alt="logo" />
            </div>
            <form action="" className='login__form' onSubmit={onSubmit}>
                <h3>Login</h3>
                <input type="text" name="login__user" id="login__user" onChange={onUserChange} className='login__user' placeholder='Username/Email' />
                <label htmlFor="login__user" aria-disabled >Username/Email</label>
                <input type="password" name="login__password" id="login__password" onChange={onPasswordChange} className='login__password' 
                placeholder='Password' />
                <label htmlFor="login__password">Password</label>
                <button type='submit' className='login__submit'>Login</button>
                <Link to={"/forget"} className='login__forgot'>Forgot password ?</Link>
                <span className="login__register">Or don't have account. <Link to={"/register"} style={{color : '#6A983C'}}>Register now!</Link></span>
            </form>
        </div>
    )
}

export default Login
