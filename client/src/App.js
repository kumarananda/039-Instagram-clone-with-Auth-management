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

function App() {
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
