import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"



// create Authenticate
const AuthRedirectUser = ({children}) => {

    const { isUserLogin } = useContext(AuthContext)
    return isUserLogin ? <Navigate to='/' /> : children ;
}

export default AuthRedirectUser

