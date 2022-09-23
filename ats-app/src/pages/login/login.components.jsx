import React from "react";
import { Navigate } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/loginForm.component";
import { useAuth } from "../../customHooks/auth/auth";

export const Login = () => {
    const userData = useAuth()
    console.log(userData)
    return userData ? <Navigate to='/dashboard'/> : <LoginForm />
}