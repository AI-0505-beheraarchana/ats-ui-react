
import React from 'react';
import './App.css';
import { ForgotPassword } from './pages/forgotPassword/forgotPassword.component';
import { Login } from './pages/login/login.components';
import { Stages } from './pages/stages/stages.component';
import RouterWrapper from './router/Routes'

const App=() =>{

  return (
    <div className="App">
      <RouterWrapper />
    </div>
  );
}

export default App;
