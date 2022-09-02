import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginForm } from "../../components/LoginForm/loginForm.component";
import { useAuth } from "../../customHooks/auth/auth";

export const Login = () => {
    const userData = useAuth()
    console.log(userData)
    return userData ? <Navigate to='/dashboard'/> : <LoginForm />
}