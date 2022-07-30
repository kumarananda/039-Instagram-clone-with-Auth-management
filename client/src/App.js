import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Authpages/Login";
import Profile from "./pages/Profile/Profile";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Register from "./pages/Authpages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/register" element={ <Register /> }/>
        <Route path="/:id" element={ <Profile /> }/>
        <Route path="/" element={ <Home /> }/>
      </Routes>
    </>
  );
}

export default App;
