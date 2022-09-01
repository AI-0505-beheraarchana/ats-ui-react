import {
    LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL
} from './action';

const initialState = {
    isLoading:null,
    login: [],
    error:{}
};

const loinReducer = (state=initialState, action) => {

    switch(action.type){
        case LOGIN_REQUEST:
            return{
               ...state,
               isLoading:true,
               error:{}
            }
            case LOGIN_SUCCESS:
                return{
                   ...state,
                   isLoading:false,
                   login:action.payload,
                   error:{}
                }
        
        case LOGIN_FAIL:
                return{
                   ...state,
                   isLoading:false,
                   login:[],
                   error:action.payload ||{}
                }
        
    

    default:
        return state;

};
    
}
export default loinReducer;