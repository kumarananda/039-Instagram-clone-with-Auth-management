
import React from 'react'
import './AuthRegister.scss'
import authlogo from '../../AuthImges/authlogo.png'
import appleStore from '../../AuthImges/apple-store.png'
import playStore from '../../AuthImges/play-store.png'
import {AiFillFacebook} from 'react-icons/ai'

const AuthRegister = () => {
  return (
    <>
      <div className="auth-container-content">

        <div className="auth-form-box">

          <div className="logo-box">
              <img src={authlogo} alt="" />
          </div>

          <div className="head-text">
            <h5>Sign up to see photos and videos from your friends.</h5>
          </div>
          
          <div className="account-with">
            <div className="account-with-btn ">
              <a href=""><button className='btn btn-sm '> <h4> <AiFillFacebook/> Log in with Facebook</h4></button></a>
            </div>
          </div>

          <div className="divider-or">
            OR
          </div>

          <div className="input-form">
            <form action="#">
              <input type="text" placeholder='Mobile Number or Email'/>
              <input type="text" placeholder='Full Name'/>
              <input type="text" placeholder='Username'/>
              <input type="text" placeholder='Password'/>

              <p className='sign-up-msg'>
                People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a> <br /> <br />
                By signing up, you agree to our Terms , <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>.
              </p>
              <input className='btn  ' type="submit" value="Sign up"/>
            </form>
          </div>





        </div>

        <div className=" if-account-or-not">
          <span><h5 className=''>Have an account? <a href="#">Log in</a></h5></span>
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

export default AuthRegister