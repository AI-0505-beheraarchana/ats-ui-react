import React from 'react';
import {LoginForm} from '../../store/login/action'
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch;
    const[email,setEmail]=React.useState();
    const submit=(e)=>{
        e.preventDefault();
        const value={
            email:email
        }
         console.log(value,"hello")
        // dispatch(LoginForm(value)); 
        
    }
    return(
        <>
        <form onSubmit={submit}>
        <h1>hello</h1>
        <input type='text' placeholder='email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type='submit'></input>
        </form>
        </>
    )
}
export default Login;