import * as LoginAction from './action'
import axios from 'axios';
import { Navigate } from "react-router-dom"

export const LoginService = ( data ) => async dispatch => {
    axios.post(process.env.REACT_APP_BASE_URL + '/login', {
        handle: data.email,
        password: data.password
    })
    .then(res =>{
        if(res){
            localStorage.setItem( 'ATS_user_data', JSON.stringify(res.data) )
            dispatch(LoginAction.loginSuccess(res.data))
        }
    }
        )
    .catch(err => {
        dispatch(LoginAction.loginFail(err))
    })
    dispatch(LoginAction.loginRequest)
}

export const Logout = ( ) => async dispatch => {
 
   dispatch(LoginAction.logoutSuccess());
    < Navigate to='/'/>

    
}