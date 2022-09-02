import * as LoginAction from '../login/types'
import axios from 'axios';

export const Login = () => async dispatch => {
    axios.get(`https://fakestoreapi.com/products`)
    .then(res =>{
        if(res){
            dispatch(LoginAction.loginSuccess(res.data))
        }
    }
        )
    .catch(err => {
        dispatch(LoginAction.loginFail(err))
    })
    dispatch(LoginAction.loginRequest)
}

export const LoginForm = (email) => async dispatch => {
  console.log(email);
}