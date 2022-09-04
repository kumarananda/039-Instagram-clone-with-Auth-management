
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../AuthRegister/AuthRegister.scss'
import authlogo from '../../AuthImges/authlogo.png'
import appleStore from '../../AuthImges/apple-store.png'
import playStore from '../../AuthImges/play-store.png'
import {AiFillFacebook} from 'react-icons/ai'
import './VerifyMobile.scss'
import { useState } from 'react'
// import swla from 'sweetalert'
import axios from 'axios'
import cookie from 'js-cookie'
import { useContext } from 'react';
import AuthContext from '../../../../context/AuthContext';
import LoaderContext from '../../../../context/LoaderContext';
import { creatToast } from '../../../../utility/toast'
import AuthFooter from '../AuthFooter/AuthFooter'




const VerifyMobile = () => {

    // error msg alert
    const [msg , setMsg] = useState({
      type : "",
      message : "",
      status : false
    })
  
    const alertClose = () => {
      setMsg({
        type : "",
        message : "",
        status : false
      })
    }

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
    
    
    // handle User Resend verify 
    const handleUserResendverify = (e) => {
      e.preventDefault() 





    }





  return (
    <>
          <div className="auth-page">
        <div className="auth-main-cont">

          <div className="auth-content">
          <div className="auth-container-content">
          {/* <ToastContainer/> */}
        <div className="auth-form-box login-form">

          <div className="logo-box">
              <img src={authlogo} alt="" />
          </div>
          <div className="alert-box">
            {
              msg.status &&<> <h6 className={`alert alert-${msg.type}`}> <p> {msg.message}</p> <Link to={'/user/mobile-verify'}>Go</Link> <span onClick={alertClose}>X</span></h6> </>
            }
            
          </div>
            {/* input form */}
          <div className="input-form">
            <form  onSubmit={handleUserResendverify}>

              <div className="inp-box">
                <label htmlFor='auth_fild'  className={inpDcon.authL}>Phone</label>
                <input value={input.auth}  onChange={handleInput} id='auth_fild' className={inpDcon.authI} name='auth' type="text" />
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
        
      </div>
            

          </div>
        </div>
        
      </div>
      <div className="auth-footer">
          <AuthFooter/>
      </div>







    </>
  )
}

export default VerifyMobile;

