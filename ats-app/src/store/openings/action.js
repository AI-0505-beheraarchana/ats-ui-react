export const GET_OPENING_REQUEST = "GET_OPENING_REQUEST"
export const GET_OPENING_SUCCESS = "GET_OPENING_SUCCESS"
export const GET_OPENING_FAIL = "GET_OPENING_FAIL"


export const getOpeningsRequest = () => ({
    type:GET_OPENING_REQUEST
})

export const getOpeningSuccess = (data) => ({
    type:GET_OPENING_SUCCESS,
    payload:data
})

export const getOpeningFail = (err) => ({
    type:GET_OPENING_FAIL,
    payload:err
})


