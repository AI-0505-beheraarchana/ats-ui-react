import React from 'react';

const Sidebar =()=>{
    return(
        <>
       <nav style={{minWidth: '90px',
    maxWidth: '90px',
    background: '#02263b',
    color: '#fff',
    transition: 'all 0.3s',
    zIndex: '1000'}}>
     <ul className="list-unstyled components"><li id="stages" class=""><a href="#/stages" class=""><i class="fa fa-cubes"></i> Stages
          </a></li><li id="opening" class="active"><a href="#/" class="router-link-exact-active router-link-active"><i class="fa fa-black-tie"></i> Openings
          </a></li><li id="candidates" class=""><a href="#/candidates" class=""><i class="fa fa-users"></i> Candidates
          </a></li><li id="users" class=""><a href="#/users" class=""><i class="fa fa-user-plus"></i> Users 
          </a></li><li id="profile" class=""><a href="#/profile" class=""><i class="fa fa-user"></i> Profile  
          </a></li></ul>
       </nav>
        </>
    )
}
export default Sidebar;