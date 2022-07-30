import React from 'react'
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import AuthSlide from '../../components/AuthSlide/AuthSlide';
import './AuthPage.scss';
import './Login.scss'

const Login = () => {
  return (
    <>
      <div className="auth-page">
        <div className="auth-main-cont">
          <div className="auth-slider">
            <div className="slider-box">
              {/* <AuthSlide/> */}
            </div>
          </div>
          <div className="auth-content">
            
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