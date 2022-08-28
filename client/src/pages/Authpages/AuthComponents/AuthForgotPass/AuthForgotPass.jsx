
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../AuthRegister/AuthRegister.scss'
// import authlogo from '../../AuthImges/authlogo.png'
// import appleStore from '../../AuthImges/apple-store.png'
// import playStore from '../../AuthImges/play-store.png'
// import {AiFillFacebook} from 'react-icons/ai'
// import './Login.scss'
import '../AuthLogin/Login.scss'
import { useState } from 'react'
// import swla from 'sweetalert'
import axios from 'axios'
// import cookie from 'js-cookie'
// import { useContext } from 'react';
// import AuthContext from '../../../../context/AuthContext';
// import LoaderContext from '../../../../context/LoaderContext';
// import { creatToast } from '../../../../utility/toast'
import './AuthForgotPass.scss'




const AuthForgotPass = () => {


  // use navigate 
  // const navigate = useNavigate();



  // form filed state
  const [input, setInput] = useState({ auth : '', code : ''});
  // console.log(input);
  // handle Input data
  const handleInput = (e) => {
    // setInput({...input, [e.target.name] : e.target.value})
    setInput( (prev) => ({...prev, [e.target.name] : e.target.value}));


  }

  // error/alert msg 
  const [msg , setMsg] = useState({
    type : "",
    message : "",
    status : false
  })
  // alert close
  const alertClose = () => {
    setMsg({
      type : "",
      message : "",
      status : false
    })
  }

  //  input design con
  const inpDcon = {
    authL : input.auth ? "cont-lavel" : '',
    authI : input.auth ? "cont-input" : '',
    codeL : input.code ? "cont-lavel" : '',
    codeI : input.code ? "cont-input" : ''
  }



  const HandleForgotPassword = async (e) => {
    e.preventDefault()

    if(!input.auth){
      setMsg( {
        type : "warning",
        message : "Filed is empty",
        status : true
      })
    }
    if(input.auth){

      await axios.post('http://localhost:5050/api/user/forgot-password', {auth : input.auth})
      .then(res => {
  
        if(res.data.action === 'mail'){
          setMsg( {
            type : "success",
            message : "Password recovery link sent",
            status : true
          })
          // creatToast('Password recover link sent')
        }
        if(res.data.action === 'code'){
          setMsg( {
            type : "success",
            message : "Password recovery code sent",
            status : true
          })
          setFormCon(true)

        }
        
      })
      .catch(error => {
        // creatToast('Email not found')
        setMsg( {
          type : "danger",
          message : "Invalid Email of not exixts",
          status : true
        })
        console.log(error)
      })
    }


  }

  // from state
  const [formCon, setFormCon] = useState(false)


  // HandleResetPassVaiCode
  const HandleResetPassVaiCode = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:5050/api/user/pass-recovery-code', {cell : input.auth, verifyCode : input.code  })
    .then(res => {
        console.log(res);
    })
    .catch(error => {
      console.log(error);
    })

  }
  


  return (
    <>

      <div className="auth-container-content">
          {/* <ToastContainer/> */}
        <div className="auth-form-box login-form">

          <div className="logo-box">
            <div className="box">

            </div>
          </div>
          <div className="forgot-pass-cintent">
            <h4>Trouble Logging In?</h4>
            <p>Enter your email,  or phone and we'll send you a link or code to get back into your account.</p>
          </div>
          
          <div className="alert-box">
            {
              msg.status &&<> <h6 className={`alert alert-${msg.type}`}> <p> {msg.message}</p> <span onClick={alertClose}>X</span></h6> </>
            }
            
          </div>

          <div className="input-form">
            {!formCon && <>
            
              <form  onSubmit={HandleForgotPassword} method="POST">
                <div className="inp-box">
                  <label htmlFor='auth_fild'  className={inpDcon.authL}>Email or phone</label>
                  <input value={input.auth}  onChange={handleInput} id='auth_fild' className={inpDcon.authI} name='auth' type="text" />
                </div>
              <input className='submit-btn ' type="submit" value="Send Link"/>
              </form>

            </>}
            { formCon && <>
                <form  onSubmit={HandleResetPassVaiCode} method="POST">
                  <div className="inp-box">
                    <label htmlFor='code_fild'  className={inpDcon.codeL}>Verify Code</label>
                    <input value={input.code}  onChange={handleInput} id='code_fild' className={inpDcon.codeI} name='code' type="text" />
                  </div>
                  <input className='submit-btn ' type="submit" value="Submit"/>
                </form>
              </>
            }
              
            

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

export default AuthForgotPass;