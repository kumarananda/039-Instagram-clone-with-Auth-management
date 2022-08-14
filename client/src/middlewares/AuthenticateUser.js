import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"



// create Authenticate
const AuthenticateUser = ({children}) => {

    const { isUserLogin } = useContext(AuthContext)
  return isUserLogin ? children : <Navigate to='/login' />
}

export default AuthenticateUser
