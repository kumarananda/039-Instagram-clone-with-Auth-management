/** @format */

import React from "react";
import "./AuthPage.scss";
import AuthFooter from "./AuthComponents/AuthFooter/AuthFooter";
// import AuthForgotPass from './AuthComponents/AuthForgotPass/AuthForgotPass';
import sitelogo from "../Authpages/AuthImges/authlogo.png";
import AuthResetPassword from "./AuthComponents/ResetPassword/AuthResetPassword";

const ResetPassword = () => {
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
            <AuthResetPassword />
          </div>
        </div>
      </div>
      <div className="auth-footer">
        <AuthFooter />
      </div>
    </>
  );
};

export default ResetPassword;
