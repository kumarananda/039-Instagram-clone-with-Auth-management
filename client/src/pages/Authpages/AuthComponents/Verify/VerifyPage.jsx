/** @format */

import React from "react";
import "./VerifyPage.scss";
import imge_ga from "../../AuthImges/authlogo.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { creatToast } from "../../../../utility/toast";

const VerifyPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:5050/api/user/verify", params)
      .then(res => {
        console.log(res.data);

        creatToast("Account Activation Successful **");
        navigate("/login");
      })
      .catch(error => {
        creatToast("Accoutn Activation Faild");
      });
  });

  return (
    <>
      <div className="verify-page">
        <div className="page-cont">
          <div className="imge-box">
            <img src={imge_ga} alt="" />
          </div>
          <div className="verify-box">
            <div className="items">
              <h4>Please verify your mail</h4>
              <p>
                <a href="/">Send</a> a verify link
              </p>
              <p>
                <a href="/">Resend</a> link
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyPage;
