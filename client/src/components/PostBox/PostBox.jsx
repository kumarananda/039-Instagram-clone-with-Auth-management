import React from 'react'
import './PostBox.scss'
import {BsThreeDots} from 'react-icons/bs'
import userimg from '../Header/tempImg/293868842_442013060903697_3099029517532529372_n.jpg'
import PostmediaSlide from './PostmediaSlide/PostmediaSlide'

const PostBox = () => {
  return (
    <>
        <div className="post-container">

            <div className="post-items">

                <div className="post-header">
                    <div className="post-header-cont">
                        <div className="user-box">
                            <div className="user-Imge-box">
                                <img  src={userimg} alt="" className="user-Imge" />
                            </div>
                            <div className="user-tex-box">
                                <div className="u-name">
                                    <span>ananda484</span>
                                </div>
                                <div className="short-data">
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="menu-box">
                            <button>
                                <BsThreeDots/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="post-media-con"> 
                <PostmediaSlide/>
                </div>

                <div className="post-content-con"> 

                    <div className="action-box">
                        <div className="content-left">
                            <ul>
                                <li>
                                <svg aria-label="Activity Feed" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>  
                                </li>
                                <li>
                                <svg aria-label="Comment" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                </li>
                                <li>
                                <svg aria-label="Share Post" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </li>
                            </ul>
                        </div>
                        <div className="content-medile">
    
                        </div>
                        <div className="content-end">
                        <svg aria-label="Save" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </div>
                    </div>
                    <div className="content-box">
                        <div className="likes-count-wraper">
                            <span>Liked by</span>
                            <span><a href="#">ananda484</a></span>
                            <span>and</span>
                            <span><a href="#">Others</a></span>

                        </div>
                        <div className="post-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nesciunt, repudiandae at non sunt quasi eum sit c
                        </div>
                        <div className="view-comments">
                            <a>view all comments</a>
                        </div>
                    </div>
                                   
                </div>

                <div className="post-footer">
                    <div className="emoji-box">
                        <div className="emoji-icon">
                            <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                        </div>
                    </div>
                    <div className="comment-input">
                        <input type="text"  placeholder='Add a comment...'/>
                    </div>
                    <div className="comment-post">
                        <a href="#">Post</a>
                    </div>
                </div>
                
            </div>
            <div className="post-items">

                <div className="post-header">
                    <div className="post-header-cont">
                        <div className="user-box">
                            <div className="user-Imge-box">
                                <img  src={userimg} alt="" className="user-Imge" />
                            </div>
                            <div className="user-tex-box">
                                <div className="u-name">
                                    <span>ananda484</span>
                                </div>
                                <div className="short-data">
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="menu-box">
                            <button>
                                <BsThreeDots/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="post-media-con"> 
                <PostmediaSlide/>
                </div>

                <div className="post-content-con"> 

                    <div className="action-box">
                        <div className="content-left">
                            <ul>
                                <li>
                                <svg aria-label="Activity Feed" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>  
                                </li>
                                <li>
                                <svg aria-label="Comment" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                </li>
                                <li>
                                <svg aria-label="Share Post" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                </li>
                            </ul>
                        </div>
                        <div className="content-medile">
    
                        </div>
                        <div className="content-end">
                        <svg aria-label="Save" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </div>
                    </div>
                    <div className="content-box">
                        <div className="likes-count-wraper">
                            <span>Liked by</span>
                            <span><a href="#">ananda484</a></span>
                            <span>and</span>
                            <span><a href="#">Others</a></span>

                        </div>
                        <div className="post-text">
                            <a href="#">ananda484</a> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nesciunt, repudiandae at non sunt quasi eum sit c
                        </div>
                        <div className="view-comments">
                            <a>view all comments</a>
                        </div>
                    </div>
                                   
                </div>

                <div className="post-footer">
                    <div className="emoji-box">
                        <div className="emoji-icon">
                            <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                        </div>
                    </div>
                    <div className="comment-input">
                        <input type="text"  placeholder='Add a comment...'/>
                    </div>
                    <div className="comment-post">
                        <a href="#">Post</a>
                    </div>
                </div>
                
            </div>


        </div>
    
    </>
  )
}

export default PostBox