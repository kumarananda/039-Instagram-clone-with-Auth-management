
import React from 'react'
import './VerifyPage.scss'
import imge_ga from "../../AuthImges/authlogo.png"
import { useParams } from 'react-router-dom'


const VerifyPage = () => {

  const params = useParams()
  console.log(params);
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
              <p><a href="#">Send</a> a verify link</p>
              <p><a href="#">Resend</a> link</p>
            </div>

          </div>
        </div>
        
      </div>
    
    </>
  )
}

export default VerifyPage