import React from 'react'
import './AuthFooter.scss'
import { FaAngleDown } from "react-icons/fa";

const AuthFooter = () => {
  return (
    <>
      <div className="auth-footer-cont">
        <div className="meta-service">
          <ul>
            <li><a href="#">Meta</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Top Accounts</a></li>
            <li><a href="#">Hashtags</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Instagram Lite</a></li>
            <li><a href="#">Contact Uploading & Non-Users</a></li>
          </ul>
        </div>
        <div className="media-service">
          <ul>
            <li><a href="#">Dance</a></li>
            <li><a href="#">Food & Drink</a></li>
            <li><a href="#">Home & Garden</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Visual Arts</a></li>
          </ul>
        </div>
      </div>
      <div className="auth-footer-copyRight">
        <div className="lang"> 
          <div className='face'><span> English <FaAngleDown/></span> </div>
          <select className='languages' name="cars" id="cars">
            <option selected value="english">English</option>
            <option value="bangla">Bangla</option>
            <option value="hindi">Hindi</option>
            <option value="aribic">Aribic</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
        <div className="right">© 2022 Instagram from Meta</div>
      </div>
    </>
  )
}

export default AuthFooter