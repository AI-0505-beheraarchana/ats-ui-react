
import React from 'react';
import './App.css';
<<<<<<< HEAD
=======
import { ForgotPassword } from './pages/forgotPassword/forgotPassword.component';
import { Login } from './pages/login/login.components';
import { Stages } from './pages/stages/stages.component';
>>>>>>> forgot password completed wihtout modal
import RouterWrapper from './router/Routes'

const App=() =>{

  return (
    <div className="App">
<<<<<<< HEAD
      <RouterWrapper />
=======
      {/* <RouterWrapper /> */}
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='forgot-password' element={ <ForgotPassword /> } />
        <Route path='dashboard' element={<ProtectedRoutes />} >
          <Route index element={<Stages />} />
        </Route>
      </Routes>
>>>>>>> forgot password completed wihtout modal
    </div>
  );
}

export default App;
