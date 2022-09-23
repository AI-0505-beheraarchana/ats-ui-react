import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/login.components';
// import DashboardLayout from '../layout/dashboardLayout';
// import { Stages } from './pages/stages/stages.component';
import { ProtectedRoutes } from '../utils/protectedRoutes';
import { Stages }from '../pages/stages/stages.component'
import Candidates from '../pages/candidates'



const RouterWrapper = () =>{
    return(
        <React.Fragment>
      <Routes>
        <Route path='/' element={ <Login /> } />
         <Route path='/dashboard' element={<ProtectedRoutes />} >
         {/* <Route index element={<DashboardLayout/>}> */}
           <Route path='/dashboard/stages' element={<Stages/>}/>
           <Route path='/dashboard/candidates' element={<Candidates/>}/>
          {/* <Route index element={<Stages />} /> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </React.Fragment>
    )
}
export default RouterWrapper ;