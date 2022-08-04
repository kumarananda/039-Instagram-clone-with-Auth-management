import React from 'react'
import Header from '../../components/Header/Header'
import './Home.scss'
import userImg from '../../components/Header/tempImg/293868842_442013060903697_3099029517532529372_n.jpg'
import FlowingUsers from '../../components/FlowingUsers/FlowingUsers'
import PostBox from '../../components/PostBox/PostBox'


const Home = () => {
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
            
        </div>
      </div>
      <div className="site-footer">
        
      </div>
    
    </>
  )
}

export default Home