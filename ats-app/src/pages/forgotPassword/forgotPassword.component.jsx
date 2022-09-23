import { Navigate } from 'react-router-dom';
import { ForgotPasswordForm } from '../../components/ForgotPassForm/forgotPassForm.component';
import { useAuth } from '../../customHooks/auth/auth'
import './forgotPassword.style.css'

export const ForgotPassword = ()=> {
    const auth = useAuth();

    return auth ? <Navigate to='/dashboard' /> : <ForgotPasswordForm />
}