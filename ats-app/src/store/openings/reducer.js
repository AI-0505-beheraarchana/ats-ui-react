import {
    GET_OPENING_REQUEST,GET_OPENING_SUCCESS,GET_OPENING_FAIL,

} from './action';

const initialState = {
    isLoading:null,
    candidates: [],
    error:{}
};

const openingReducer = (state=initialState, action) => {

    switch(action.type){
        case GET_OPENING_REQUEST:
            return{
               ...state,
               isLoading:true,
               error:{}
            }
            case GET_OPENING_SUCCESS:
                return{
                   ...state,
                   isLoading:false,
                   candidates:action.payload,
                   error:{}
                }
        
        case GET_OPENING_FAIL:
                return{
                   ...state,
                   isLoading:false,
                   candidates:[],
                   error:action.payload ||{}
                }
    

    default:
        return state;

};
    
}
export default openingReducer;