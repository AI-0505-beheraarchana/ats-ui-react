import { combineReducers } from 'redux';
import loinReducer  from './login/reducer'
import openingReducer from './openings/reducer'


const rootReducer = combineReducers({

    login:loinReducer ,
    candidates:openingReducer

});

export default rootReducer;