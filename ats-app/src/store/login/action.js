export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const FORGOTPASS_SUCCESS = "FORGOTPASS_SUCCESS"
export const FORGOTPASS_ERROR = "FORGOTPASS_ERROR"

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"

export const loginRequest = () => ({
    type:LOGIN_REQUEST
})

export const loginSuccess = (data) => ({
    type:LOGIN_SUCCESS,
    payload:data
})

export const loginFail = (err) => ({
    type:LOGIN_FAIL,
    payload:err
})

export const forgotPassSuccess = () => ({
    type:FORGOTPASS_SUCCESS
})

export const forgotPassError = () => ({
    type:FORGOTPASS_ERROR
})
