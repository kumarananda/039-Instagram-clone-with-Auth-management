import React from 'react'
import Header from '../../components/Header/Header'
import './Home.scss'
import userImg from '../../components/Header/tempImg/293868842_442013060903697_3099029517532529372_n.jpg'
import FlowingUsers from '../../components/FlowingUsers/FlowingUsers'
import PostBox from '../../components/PostBox/PostBox'
import FlowerSuggestions from '../../components/FlowerSuggestions/FlowerSuggestions'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../../context/authContext'


const Home = () => {

  // use context
  const {authdispatch, user} = useContext(AuthContext);
  // console.log(authstate.user);
  console.log(user);

  //use navigate
  const navigate = useNavigate();


  //handle user logout
  const handleUserLogout = (e)  => {
    e.preventDefault();

    Cookies.remove('token');
    Cookies.remove('user');

    authdispatch({type : 'USER_LOGOUT'})

    navigate('/login')

  }


  return (
    <>
      <div className="site-header">
        <div className="site-header-box">
          <Header/>
        </div>
        
      </div>
      <div className="site-content">

        <div className="post-aria-box">
          <div className="header-space-div"></div>

            <FlowingUsers/>

            <div className="post-aria-items">
              <div className="post-box">
              <PostBox/>
              </div>
            </div>
        </div>

        <div className="suggestion-aria-box">
          <div className="header-space-div"></div>

          <div className="user-control-box">
            <div className="user-img">
              <img src={`${user.img ? user.img : 'https://www.w3schools.com/howto/img_avatar.png'}`} alt="" />
            </div>
            <div className="user-data">
              <div className="user-name">
                <span>{user.username}</span>
              </div>
              <div className="user-full-name">
                <span>{user.name}</span>
              </div>
              <div className="log-out-btn">
                <a onClick={handleUserLogout} href="#">Log Out</a>
              </div>
            </div>
            <div className="account-switch">
              <span><a href="#">Switch</a> </span>
            </div>
          </div>
          <div className="flower-Suggestions">
            <FlowerSuggestions/>
          </div>

        </div>
      </div>
      <div className="site-footer">
        
      </div>
    
    </>
  )
}

export default Home