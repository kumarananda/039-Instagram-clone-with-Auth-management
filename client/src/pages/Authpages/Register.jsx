import React from 'react'
import './AuthPage.scss';
import AuthFooter from './AuthComponents/AuthFooter/AuthFooter';
import AuthRegister from './AuthComponents/AuthRegister/AuthRegister';
import AuthSlide from './AuthComponents/AuthSlide/AuthSlide';


const Register = () => {
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
            <AuthRegister/>
          </div>
        </div>
        
      </div>
      <div className="auth-footer">
          <AuthFooter/>
      </div>
    </>
  )
}

export default Register