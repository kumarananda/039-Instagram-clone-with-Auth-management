import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Authpages/Login";
import Profile from "./pages/Profile/Profile";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import './defult.css'
import Register from "./pages/Authpages/Register";
import AuthenticateUser from "./middlewares/AuthenticateUser";
import AuthRedirectUser from "./middlewares/AuthRedirectUser";
import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "./context/authContext";

function App() {

  // get token
  const token = Cookies.get('token');

  // get auth context
  const {authdispatch, authstate} = useContext(AuthContext)

  // console.log(authstate.user);

  // check login user
  useEffect( () => {
    

    try{ 

      axios.get('http://localhost:5050/api/user/me', {
        headers : {
          "Authorization" : `Bearer ${token}`
        }
      })
      .then(res => {
        // console.log(res.data);
        authdispatch({type : 'LOGIN_USER_SUCCESS', payload : res.data})
      })
      .catch(error => {
        authdispatch({type : 'USER_LOGOUT'})
      }) 

    }catch(error){
      console.log(error);
    }


  }, [token])
 
  // console.log(authstate);



  return (
    <>
      <Routes>
        <Route path="/login" element={ <AuthRedirectUser> <Login /> </AuthRedirectUser>  }/>
        <Route path="/register" element={ <AuthRedirectUser>  <Register /> </AuthRedirectUser>  }/>
        <Route path="/:id" element={ <Profile /> }/>
        <Route path="/" element={ <AuthenticateUser> <Home /> </AuthenticateUser>  }/>
      </Routes>
    </>
  );
}

export default App;
