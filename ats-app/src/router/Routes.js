import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from '../pages/login'

const RouterWrapper=()=>{

    return(
        <React.Fragment>
        
        <Routes>
          <Route path="/login" element={<Login />}/>
            </Routes>
            </React.Fragment>
    )
    }
export default RouterWrapper;