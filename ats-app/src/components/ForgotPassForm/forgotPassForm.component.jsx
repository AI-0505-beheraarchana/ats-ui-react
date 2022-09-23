import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ForgotPasswordService } from '../../store/login/services';
import { Modal } from '../modal/modal.component';
import './forgotPassForm.style.css'

export const ForgotPasswordForm = () => {
    const forgotPasswordState = useSelector( state => state.login.forgotPasswordStatus )
    console.log('10', forgotPasswordState)
    const dispatch = useDispatch()

    useEffect(()=>{ console.log( 'store', forgotPasswordState ) },[])
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState()
    const [ modalProps, setModalProps] = useState({
        title: '',
        buttonName: 'OK',
        body: 'User not found, please check your email address and try again',
        showModal: false
    })

    const onChangeHandler = (event) => {
        event.preventDefault();
        setEmail(event.target.value)
    }

    const validate = () => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        let error = '';
        let flag = true
        if (!email) {
            error = 'Email can not be empty'
            flag = false
        }
        else if (!emailRegex.test(email)) {
            error = 'Email is not valid'
            flag = false
        }
        setEmailError(error);
        return flag
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submiting')
        if(validate()){
            console.log('validated')
            dispatch(ForgotPasswordService(email))
        }
    }

    const onClickHandler = (event) => {
        event.preventDefault();
        if(modalProps.showModal){
            setModalProps({...modalProps, showModal: false})
        }
        <Navigate to='/login' />
    }

    useEffect(() => {
        if(forgotPasswordState){
            setModalProps({ ...modalProps, body: 'Password reset link has been sent to your email', showModal:true })
        }
        setModalProps({ ...modalProps, body: 'Password reset link has been sent to your email', showModal:true })
    }, [forgotPasswordState]);

    return (
        <>
            <div className="container-fluid">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={onChangeHandler} />
                        <div id="emailHelp" className="form-text text-danger"> {emailError} </div>
                    </div>
                    <button type='submit' className='btn btn-primary'> Send </button>
                </form>
            </div>
            {forgotPasswordState && <Modal modalProps={modalProps} onClickHandler={onClickHandler}/>}
        </>
    )
}