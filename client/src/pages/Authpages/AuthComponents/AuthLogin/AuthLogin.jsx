
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../AuthRegister/AuthRegister.scss'
import authlogo from '../../AuthImges/authlogo.png'
import appleStore from '../../AuthImges/apple-store.png'
import playStore from '../../AuthImges/play-store.png'
import {AiFillFacebook} from 'react-icons/ai'
import './Login.scss'
import { useState } from 'react'
// import swla from 'sweetalert'
import axios from 'axios'
import cookie from 'js-cookie'
import { useContext } from 'react';
import AuthContext from '../../../../context/AuthContext';
import LoaderContext from '../../../../context/LoaderContext';
import { creatToast } from '../../../../utility/toast'




const AuthLogin = () => {


  // use loader context 
  const {loaderDispatch} = useContext(LoaderContext)

  // use navigate 
  const navigate = useNavigate();



  // form filed state
  const [input, setInput] = useState({
    auth : '',
    password : ""
  });
  // console.log(input);

  //  input design con
  const inpDcon = {
    authL : input.auth ? "cont-lavel" : '',
    authI : input.auth ? "cont-input" : '',
    passL : input.password ? "cont-lavel" : '',
    passI : input.password ? "cont-input" : ''
  }

    // handle Input data
    const handleInput = (e) => {
      // setInput({...input, [e.target.name] : e.target.value})
      setInput( (prev) => ({...prev, [e.target.name] : e.target.value}));
  
    }

    // use contex
    const { authdispatch , authstate} = useContext(AuthContext)
    
    
    
    

    // handle user login 
    const handleUserLogin = async  (e) => {
      e.preventDefault();

      try{
        if(!input.auth || !input.password){
          // swla('Filed Empty', 'All filds are require', 'error')
          creatToast('All filds are required')
        }else{

          await axios.post('http://localhost:5050/api/user/login', {auth : input.auth, password : input.password})
          .then(res => {

            if(res.data.user.isVerified){

              cookie.set('token', res.data.token);
              console.log(res.data.user.name);
              // console.log(res.data.user.isVerified);
              // update data 
              authdispatch({type : 'LOGIN_USER_SUCCESS', payload : res.data.user})
              navigate('/');
              loaderDispatch({type : "LOADER_START"})
              
            }else {
              // console.log(res.data.user);
              // console.log(authstate.user);
              // console.log("authstate");
              creatToast('Please verify your account')
              
              authdispatch({type : 'USER_ACC_VERIFY', payload : res.data.user})

              // navigate('/verify');
            }



          })
        }


      }catch(error){
        creatToast('Wrong user name or password')
      }

    }



  return (
    <>
      <div className="auth-container-content">
          {/* <ToastContainer/> */}
        <div className="auth-form-box login-form">

          <div className="logo-box">
              <img src={authlogo} alt="" />
          </div>
          




          <div className="input-form">
            <form  onSubmit={handleUserLogin}>

              <div className="inp-box">
                <label htmlFor='auth_fild'  className={inpDcon.authL}>Username or password</label>
                <input value={input.auth}  onChange={handleInput} id='auth_fild' className={inpDcon.authI} name='auth' type="text" />
              </div>
              <div className="inp-box">
                <label htmlFor='pass_fild'  className={inpDcon.passL}>Password</label>
                <input value={input.password}  onChange={handleInput} id='pass_fild' className={inpDcon.passI} name='password' type="text" />
              </div>

              <input className='submit-btn ' type="submit" value="Log In"/>
            </form>
          </div>

          <div className="divider-or">
            OR
          </div>

          <div className="account-with">
            <div className="account-with-btn ">
              <a href=""><button className='btn btn-sm '> <div className='text'> <AiFillFacebook/> Log in with Facebook</div></button></a>
            </div>
          </div>

          <div className="forgot-pass">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
           

        </div>

        <div className=" if-account-or-not">
          <span><h5 className=''>Don't have an account? <Link to={"/register"}>Sign up</Link></h5></span>
        </div>

        <div className="get-app">
          <div className="text"><p>Get the app.</p></div>
          <div className="app">
            <div className="app-box">
              <div className="google">
                <img src={playStore} alt="" />
              </div>
              <div className="apple">
                <img src={appleStore} alt="" />
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </>
  )
}

export default AuthLogin;