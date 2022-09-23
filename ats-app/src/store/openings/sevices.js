import * as OpeningAction from './action'
import axios from 'axios';

export const GetOpenings = () => async dispatch => {
    const data =  JSON.parse(localStorage.getItem('ATS_user_data'));
 const token = data.token;
    axios.get(process.env.REACT_APP_BASE_URL + '/openings', { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res =>{
        console.log('12', res.data)
        if(res){
            dispatch(OpeningAction.getOpeningSuccess(res.data))
        }
    }
        )
    .catch(err => {
        dispatch(OpeningAction.getOpeningFail(err))
    })
    dispatch(OpeningAction.getOpeningsRequest())
}

