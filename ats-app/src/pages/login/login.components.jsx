import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginForm } from "../../components/LoginForm/loginForm.component";

export const Login = () => {
    const userData = useSelector(state=>state.login)
    console.log(userData)
    const navigate = useNavigate()
    
    useEffect(()=>{
        console.log('asdasdssadasfdeggrsga', userData)
        if(userData && userData.login.token){
            console.log('asdasdsa')
            navigate('/stages')
        }
    }, [userData])

    return <LoginForm />
}