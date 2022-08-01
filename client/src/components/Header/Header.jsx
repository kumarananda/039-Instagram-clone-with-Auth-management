import React from 'react'
import pnglogo from '../../pages/Authpages/AuthImges/authlogo.png'
import './Header.scss'


const Header = () => {
  return (
    <>
        <nav className='header'>
            <div className='header-box'>
                <div className="header-item header-left">
                    <div className="header-logo">
                        <img src={pnglogo} alt="" />
                    </div>
                </div>
                <div className="header-item header-medile">
                    <img src={pnglogo} alt="" />
                </div>
                <div className="header-item header-right">
                    <img src={pnglogo} alt="" />
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header