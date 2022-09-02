import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from '../pages/login/login.components'
import { Stages } from "../pages/stages/stages.component";
import * as LoginAction from '../store/login/action'


const RouterWrapper = () => {

  const navigate = useNavigate()
  const [ hasToken, setHasToken ] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('ATS_user_data'));
    console.log(userData)
    if(userData && userData.token){
      setHasToken(true)
    }
    else{
      dispatch(LoginAction.loginSuccess({}))
      navigate('/')
    }
  },[])

  return (
    <React.Fragment>

      <Routes>
        {/* { hasToken ? ( <Route path="/" element={<Stages />} /> ) : ( <Route path="/" element={<Login />} />) } */}
        <Route path="/" element={<Login />} />
        <Route path="/stages" element={<Stages />} />
      </Routes>
    </React.Fragment>
  )
}
export default RouterWrapper;