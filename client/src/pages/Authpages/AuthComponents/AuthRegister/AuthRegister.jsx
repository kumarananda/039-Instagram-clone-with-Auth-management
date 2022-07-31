
import React from 'react'
import './AuthRegister.scss'
import authlogo from '../../AuthImges/authlogo.png'
import appleStore from '../../AuthImges/apple-store.png'
import playStore from '../../AuthImges/play-store.png'

const AuthRegister = () => {
  return (
    <>
        <div className="sign-container">
            <div className="logo-box">
                <img src={authlogo} alt="" />
            </div>

        </div>






        <div className="if-account-or-not">
          <h3 className="head-text">
              Sign up to see photos and videos from your friends.
          </h3>
        </div>


        <div className="account-with-btn">
          <span><p>Have an account? <a href="#">Log in</a></p></span>
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

    </>
  )
}

export default AuthRegister