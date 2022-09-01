import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from './store/login/action'
import './App.css';
import RouterWrapper from './router/Routes'

const App=() =>{
  
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.login);
   console.log("hii",data)

  React.useEffect(()=>{
    dispatch(Login());
  }, []);

  return (
    <div className="App">
      <RouterWrapper />
    </div>
  );
}

export default App;
