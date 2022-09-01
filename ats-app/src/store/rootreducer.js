import { combineReducers } from 'redux';
import loinReducer  from './login/reducer'


const rootReducer = combineReducers({

    login:loinReducer ,

});

export default rootReducer;