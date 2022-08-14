import { useReducer } from "react"
import LoaderContext from "../context/LoaderContext";
import LoaderReduser from "../recucers/LoaderReduser";



// inatial state
export const INITAL_STATE = 0;

// create provider
const LoadercontextProvider = ({children}) => {

  const [loaderstate, loaderDispatch] = useReducer(LoaderReduser, INITAL_STATE)

  // console.log(authstate);

  return (
    <LoaderContext.Provider 
        value={{
            loaderstate,
            loaderDispatch
        }}
    >
        {children}
    </LoaderContext.Provider>
  )
}

export default LoadercontextProvider ;