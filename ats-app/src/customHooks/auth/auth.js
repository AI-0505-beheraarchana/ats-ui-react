import { useSelector } from "react-redux"

export const useAuth = ()=> {
    const storeAuth = useSelector(state=>state.login.login) 
    const localAuth = JSON.parse(localStorage.getItem('ATS_user_data'))

    console.log(useSelector(state=>state.login.login), JSON.parse(localStorage.getItem('ATS_user_data')))

    if(storeAuth && storeAuth.token){
        return true
    }

    if(localAuth && localAuth.token){
        return true
    }

    return false
}