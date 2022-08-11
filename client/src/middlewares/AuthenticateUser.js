import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../context/authContext"



// create Authenticate
const AuthenticateUser = ({children}) => {

    const { token } = useContext(AuthContext)
  return token ? children : <Navigate to='/login' />
}

export default AuthenticateUser
