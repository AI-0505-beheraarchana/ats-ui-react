

import React from 'react'
 import { useDispatch } from "react-redux";
 import { Logout } from "../../store/login/services"
 import {AiOutlineLogout} from "react-icons/ai";

 
export const Navbar = () => {
   
    const dispatch = useDispatch();
         const logout =()=>{
            console.log("ju")
          dispatch(Logout());
        
         }
    return (
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="flex-row d-flex">
                    <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">Logo</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                             <span className="sr-only">Home</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="//www.codeply.com">Link</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {/* <div style={{background:"white"}}> <iOutlineLogout color="white" onClick={logout}/></div> */}
                       
                        <button onClick={logout}>logout</button>
                        <li className="nav-item">
                  <a className="nav-link waves-effect waves-light text-white">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                    </ul>
                </div>
       </nav>
    )
}
export default Navbar