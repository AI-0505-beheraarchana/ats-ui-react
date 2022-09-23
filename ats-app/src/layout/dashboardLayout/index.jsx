import React from 'react';
import Sidebar from './Sidebar'
import Navbar from './Navbar'


const DashboardLayout =()=>{
    return(
        <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                   <div style={{margin:'200px'}}>

                   </div>
                  {/* <Dashboard/> */}
                
             </div>
            </div>  
        </div>  
    )
}
export default DashboardLayout ;

