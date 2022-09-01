import * as LoginAction from './action'
import axios from 'axios';

export const LoginService = ( data ) => async dispatch => {
    axios.post(process.env.REACT_APP_BASE_URL + '/login', {
        handle: data.email,
        password: data.password
    })
    .then(res =>{
        console.log('1111111111', res.data)
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
