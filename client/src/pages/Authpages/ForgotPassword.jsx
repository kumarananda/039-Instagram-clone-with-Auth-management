import React from 'react'
import './AuthPage.scss';
import AuthFooter from './AuthComponents/AuthFooter/AuthFooter';
import AuthForgotPass from './AuthComponents/AuthForgotPass/AuthForgotPass';
import sitelogo from '../Authpages/AuthImges/authlogo.png'



const ForgotePassword = () => {
  return (
    <>
    
      <div className="logo-header ">
        <div className="logo-box">
          <img src={sitelogo} alt="" />
        </div>
      </div>
      <div className="auth-page">
        <div className="auth-main-cont">
          <div className="auth-content">
            <AuthForgotPass/>
          </div>
        </div>
        
      </div>
      <div className="auth-footer">
          <AuthFooter/>
      </div>
    </>
  )
}

export default ForgotePassword