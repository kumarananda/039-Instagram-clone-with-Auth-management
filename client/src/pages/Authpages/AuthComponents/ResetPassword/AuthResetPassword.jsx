
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../AuthRegister/AuthRegister.scss'
import authlogo from '../../AuthImges/authlogo.png'
import appleStore from '../../AuthImges/apple-store.png'
import playStore from '../../AuthImges/play-store.png'
import {AiFillFacebook} from 'react-icons/ai'

import '../AuthLogin/Login.scss'
import { useState } from 'react'
import swla from 'sweetalert'
import axios from 'axios'
// import cookie from 'js-cookie'
// import { useContext } from 'react';
// import AuthContext from '../../../../context/AuthContext';
// import LoaderContext from '../../../../context/LoaderContext';
// import { creatToast } from '../../../../utility/toast'
import '../AuthForgotPass/AuthForgotPass.scss'
import './ResetPassword.scss'




const AuthResetPassword = () => {


  // use navigate 
  // const navigate = useNavigate();



  // form filed state
  const [input, setInput] = useState({ auth : ''});
  console.log(input);

  //  input design con
  const inpDcon = {
    newL : input.password ? "cont-lavel" : '',
    newI : input.password ? "cont-input" : '',
    confirmL : input.confirmPass ? "cont-lavel" : '',
    confirmI : input.confirmPass ? "cont-input" : ''
  }

    // handle Input data
    const handleInput = (e) => {
      // setInput({...input, [e.target.name] : e.target.value})
      setInput( (prev) => ({...prev, [e.target.name] : e.target.value}));
  
    }

  const HandleResetPassword = async (e) => {
    e.preventDefault()

    await axios.post('http://localhost:5050/api/user/reset-password', {auth : input.auth})
    // .then(res => {
    //   console.log(res.data);
    // })
    // .catch(error => {
    //   console.log(error)
    // })


  }
  


  return (
    <>

      <div className="auth-container-content">
          {/* <ToastContainer/> */}
        <div className="auth-form-box login-form">

          <div className="reset-pass-cintent">
            <h4>Set New Password</h4>
          </div>
          

          <div className="input-form">
            <form  onSubmit={HandleResetPassword}>

              <div className="inp-box">
                <label htmlFor='newPassFiled'  className={inpDcon.newL}>Enter your new password</label>
                <input value={input.password}  onChange={handleInput} id='newPassFiled' className={inpDcon.newI} name='password' type="text" />
              </div>
              <div className="inp-box">
                <label htmlFor='confirmPass'  className={inpDcon.confirmL}>Confirm password</label>
                <input value={input.confirmPass}  onChange={handleInput} id='confirmPass' className={inpDcon.confirmI} name='confirmPass' type="text" />
              </div>

              <input className='submit-btn ' type="submit" value="Send Link"/>
            </form>
          </div>

          <div className=" m-t-30">
            <a href="#">Can't reset your password?</a>
          </div>
          
          <div className="divider-or">
            OR
          </div>

          <div className="create-acc">
            <Link to="/register">Create New Account</Link>
          </div>
          <div className="back-login">
            <Link to="/login">Back Login</Link>
          </div>

        </div>

      
      </div>
    </>
  )
}

export default AuthResetPassword;
