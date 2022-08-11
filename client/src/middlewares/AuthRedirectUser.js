import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../context/authContext"



// create Authenticate
const AuthRedirectUser = ({children}) => {

    const { token } = useContext(AuthContext)
    return token ? <Navigate to='/' /> : children ;
}

export default AuthRedirectUser

