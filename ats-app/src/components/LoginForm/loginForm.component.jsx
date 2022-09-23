import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Stages } from "../../pages/stages/stages.component";
import { LoginService } from "../../store/login/services";

export const LoginForm = () => {

    const dispatch = useDispatch();


    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [loginError, setLoginError] = useState({})

    const onChangehandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value })
    }

    const validateForm = () => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        const { email, password } = loginData
        const errors = {}

        if (!email) {
            errors.email = 'Email can not be empty'
        }
        else if (!emailRegex.test(email)) {
            errors.email = 'Email is not valid'
        }

        if (!password) {
            errors.password = 'Password can not be empty'
        }

        setLoginError(errors)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        validateForm();
    }

    useEffect(() => {
        dispatch( LoginService( loginData ) )
    }, [loginError])

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={loginData.email} 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        onChange={ onChangehandler }/>
                    <div id="emailHelp" className="form-text text-danger"> {loginError.email} </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={loginData.password} 
                        className="form-control" 
                        id="exampleInputPassword1"
                        onChange={ onChangehandler }/> 
                    <div id="emailHelp" className="form-text text-danger"> {loginError.password} </div>
                </div>
                <div className="mb-3 form-check">
                    <Link to={ Stages }> <span> Forgot Password? </span> </Link>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}