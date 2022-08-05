
import React from 'react'
import {Link} from 'react-router-dom'
import '../AuthRegister/AuthRegister.scss'
import authlogo from '../../AuthImges/authlogo.png'
import appleStore from '../../AuthImges/apple-store.png'
import playStore from '../../AuthImges/play-store.png'
import {AiFillFacebook} from 'react-icons/ai'
import './Login.scss'
import { useState } from 'react'



const AuthLogin = () => {


  const [input, setInput] = useState({
      name : '',
      email : '',
      pass : ''
  })


  return (
    <>
      <div className="auth-container-content">

        <div className="auth-form-box login-form">

          <div className="logo-box">
              <img src={authlogo} alt="" />
          </div>
          




          <div className="input-form">
            <form action="#">
              <div className="inp-box">
                <label className='inp-box-lavel'>
                  <span  className='box-lavel cont-lavel '>Mobile Number or Email</span>
                  <input placeholder='Mobile Number or Email' className='box-input cont-input' name='emailorphone' type="text" />
                </label>
              </div>
              <div className="inp-box2">
                <label className='inp-box-lavel'>
                  <span  className='box-lavel cont-lavel '>Mobile Number or Email</span>
                  <input placeholder='' className='box-input cont-input' name='emailorphone' type="text" />
                </label>
              </div>
              <div className="inp-box2">
                <label className='inp-box-lavel'>
                  <span  className='box-lavel cont-lavel '>Mobile Number or Email</span>
                  <input placeholder='' className='box-input cont-input' name='emailorphone' type="text" />
                </label>
              </div>
              <div className="inp-box2">
                <label className='inp-box-lavel'>
                  <span  className='box-lavel cont-lavel '>Mobile Number or Email</span>
                  <input placeholder='' className='box-input cont-input' name='emailorphone' type="text" />
                </label>
              </div>
              {/* <input type="text" placeholder='Mobile Number or Email'/>
              <input type="text" placeholder='Password'/> */}

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
            <a href="#">Forgot password?</a>
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

export default AuthLogin