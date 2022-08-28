import React from 'react'
import './AuthPage.scss';
import AuthFooter from './AuthComponents/AuthFooter/AuthFooter';
import AuthSlide from './AuthComponents/AuthSlide/AuthSlide';
import AuthLogin from './AuthComponents/AuthLogin/AuthLogin';



const Login = () => {


  return (
    <>
      <div className="auth-page">
        <div className="auth-main-cont">
          <div className="auth-slider">
            <div className="slider-box">
              <AuthSlide/>
            </div>
          </div>
          <div className="auth-content">
            <AuthLogin/>
          </div>
        </div>
        
      </div>
      <div className="auth-footer">
          <AuthFooter/>
      </div>
    </>
  )
}

export default Login