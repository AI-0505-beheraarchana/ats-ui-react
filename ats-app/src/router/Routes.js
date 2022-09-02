import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../pages/login'
import DashboardLayout from "../layout/dashboardLayout";

const RouterWrapper=()=>{

    return(
        <React.Fragment>   
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<DashboardLayout/>}/>
            </Routes>
            </React.Fragment>
    )
    }
export default RouterWrapper;