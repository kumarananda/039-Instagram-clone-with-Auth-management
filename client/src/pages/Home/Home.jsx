import React from 'react'
import Header from '../../components/Header/Header'
import './Home.scss'
import userImg from '../../components/Header/tempImg/293868842_442013060903697_3099029517532529372_n.jpg'


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
            <div className="flowing-users">
              
              <ul className="user-box">

                <li className='user-box-items'> 
                  <a href="#">
                    <div className="img-wrapar">
                      <img src={userImg} alt="" />
                    </div>
                    
                    <div className="user-name">
                      ananda484ddddddddddddddddddddddddd
                    </div>
                  </a>
                </li>
                <li className='user-box-items'> 
                  <a href="#">
                    <div className="img-wrapar">
                      <img src={userImg} alt="" />
                    </div>
                    
                    <div className="user-name">
                      ananda484ddddddddddddddddddddddddd
                    </div>
                  </a>
                </li>
                <li className='user-box-items'> 
                  <a href="#">
                    <div className="img-wrapar">
                      <img src={userImg} alt="" />
                    </div>
                    
                    <div className="user-name">
                      ananda484ddddddddddddddddddddddddd
                    </div>
                  </a>
                </li>
                <li className='user-box-items'> 
                  <a href="#">
                    <div className="img-wrapar">
                      <img src={userImg} alt="" />
                    </div>
                    
                    <div className="user-name">
                      ananda484ddddddddddddddddddddddddd
                    </div>
                  </a>
                </li>
                <li className='user-box-items'> 
                  <a href="#">
                    <div className="img-wrapar">
                      <img src={userImg} alt="" />
                    </div>
                    
                    <div className="user-name">
                      ananda484ddddddddddddddddddddddddd
                    </div>
                  </a>
                </li>
                <li className='user-box-items'> 
                  <a href="#">
                    <div className="img-wrapar">
                      <img src={userImg} alt="" />
                    </div>
                    
                    <div className="user-name">
                      ananda484ddddddddddddddddddddddddd
                    </div>
                  </a>
                </li>


              </ul>
            </div>
            <div className="post-aria-items">
              <div className="post-box">

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