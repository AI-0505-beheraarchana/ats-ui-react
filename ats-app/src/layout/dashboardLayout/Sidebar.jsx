// import React from 'react';

// const Sidebar =()=>{
//     return(
//         <>
//        <nav style={{minWidth: '90px',
//     maxWidth: '90px',
//     background: '#02263b',
//     color: '#fff',
//     transition: 'all 0.3s',
//     zIndex: '1000'}}>
//      <ul classNameName="list-unstyled components"><li id="stages" className=""><a href="#/stages" className=""><i className="fa fa-cubes"></i> Stages
//           </a></li><li id="opening" className="active"><a href="#/" className="router-link-exact-active router-link-active"><i className="fa fa-black-tie"></i> Openings
//           </a></li><li id="candidates" className=""><a href="#/candidates" className=""><i className="fa fa-users"></i> Candidates
//           </a></li><li id="users" className=""><a href="#/users" className=""><i className="fa fa-user-plus"></i> Users 
//           </a></li><li id="profile" className=""><a href="#/profile" className=""><i className="fa fa-user"></i> Profile  
//           </a></li></ul>
//        </nav>
//         </>
//     )
// }
// export default Sidebar;

import React from 'react'
import { Navigate ,Link} from "react-router-dom"
const Sidebar = () => {
    return (
         <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#02263b",width:'200px',height:'100vh'}}>
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-3">
                    <Link to="/dashboard/stages">
                        <h5>Stages</h5>
                        </Link>
                        </li>
                <li className="nav-item mb-2 ">
                    <a className="nav-link text-secondary" href="/dashboard/candidates">
                        <i className="fas fa-user font-weight-bold"></i>
                         <span classNameName="ml-3">Openings</span>
                         </a>
                         </li>
                <li className="nav-item mb-2">
                    <a className="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="far fa-file-word font-weight-bold"></i> <span classNameName="ml-3"> Candidates</span></a>
                    <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li className="nav-item mb-2 "><a className="nav-link text-secondary" href=""><i className="fas fa-book-reader"></i> Users</a></li>
                       <li className="nav-item mb-2 "><a className="nav-link text-secondary" href=""> <i className="fas fa-book-medical"></i> Profile </a></li>
                    </ul>
                </li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="far fa-chart-bar font-weight-bold"></i> <span classNameName="ml-3">Users</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-file-export font-weight-bold"></i><span classNameName="ml-3">Profile</span></a></li>
               
            </ul>
       </div>
    )
}
 
export default Sidebar