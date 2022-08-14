import AuthContext from "../context/AuthContext"
// import  cookie from 'js-cookie'
import { useReducer } from "react"
import AuthReduser from "../recucers/AuthReduser"


// inatial state
export const INITAL_STATE = {
  isUserLogin : false,
  user : {}
}

// create provider
const AuthcontextProvider = ({children}) => {

  const [authstate, authdispatch] = useReducer(AuthReduser, INITAL_STATE)

  // console.log(authstate);

  return (
    <AuthContext.Provider 
        value={{
          isUserLogin : authstate.isUserLogin ,
          user : authstate.user,
          authdispatch ,
          authstate
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthcontextProvider ;