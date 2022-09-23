import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

import DashboardLayout from '../../layout/dashboardLayout';
import { GetOpenings } from '../../store/openings/sevices'
const Candidates=()=>{
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.candidates);
    console.log('jd',data);
     
    React.useEffect(()=>{
         dispatch(GetOpenings());
    },[])
    return(
        <DashboardLayout><div>candidates</div></DashboardLayout>
    )
}
export default Candidates;