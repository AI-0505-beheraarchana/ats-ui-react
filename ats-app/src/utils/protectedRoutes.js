import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../customHooks/auth/auth"

export const ProtectedRoutes = ()=>{
    const auth = useAuth()

    return auth ? <Outlet /> : <Navigate to='/' />
}