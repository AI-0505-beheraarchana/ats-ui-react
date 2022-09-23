import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, FORGOTPASS_SUCCESS, FORGOTPASS_ERROR
} from './action';

const initialState = {
    isLoading: null,
    login: [],
    error: {},
    forgotPasswordStatus: false
};

const loinReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: {}
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                login: action.payload,
                error: {}
            }

        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                login: [],
                error: action.payload || {}
            }

        case FORGOTPASS_SUCCESS:
            console.log('triggered')
            return{
                ...state,
                forgotPasswordStatus: true
            }
        case FORGOTPASS_ERROR:
            return{
                ...state,
                forgotPasswordStatus: false
            }

        default:
            return state;

    };

}
export default loinReducer;