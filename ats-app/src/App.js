import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login/login.components';
import { Stages } from './pages/stages/stages.component';
import RouterWrapper from './router/Routes'
import { ProtectedRoutes } from './utils/protectedRoutes';

const App=() =>{
  
  // const dispatch = useDispatch();
  // const data = useSelector((state)=> state.login);
  //  console.log("hii",data)

  

  // React.useEffect(()=>{
  //   dispatch(Login());
  // }, []);

  return (
    <div className="App">
      {/* <RouterWrapper /> */}
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/dashboard' element={<ProtectedRoutes />} >
          <Route index element={<Stages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
