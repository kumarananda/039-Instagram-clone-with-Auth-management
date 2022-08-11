import AuthContext from "../context/authContext"
import  cookie from 'js-cookie'
import { useReducer } from "react"
import AuthReduser from "../recucers/AuthReduser"


// inatial state
export const INITAL_STATE = {
  token : cookie.get('token') || null,
  user : cookie.get('user') ? JSON.parse(cookie.get('user')) : null 
}

// create provider
const AuthcontextProvider = ({children}) => {

  const [authstate, authdispatch] = useReducer(AuthReduser, INITAL_STATE)

  return (
    <AuthContext.Provider 
        value={{
            token : authstate.token,
            user : authstate.user,
            authdispatch 
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthcontextProvider ;