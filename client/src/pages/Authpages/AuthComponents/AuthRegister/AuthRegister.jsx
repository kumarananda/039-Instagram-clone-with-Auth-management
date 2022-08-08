
import React from 'react'
import {Link} from 'react-router-dom'
import './AuthRegister.scss'
import authlogo from '../../AuthImges/authlogo.png'
import appleStore from '../../AuthImges/apple-store.png'
import playStore from '../../AuthImges/play-store.png'
import {AiFillFacebook} from 'react-icons/ai'
import { useState } from 'react'
import swl from 'sweetalert'
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/react-toastify.css'
import 'react-toastify/dist/ReactToastify.css';



const AuthRegister = () => {

  // create a tost
  const creatToast = (msg) => {
    return toast(msg)
  }

  // state for form fild
  const [input, setInput] = useState({
    email : '',
    name : "",
    username : "",
    password : ""

  })
  console.log(input);

  // try input design con
  const inpDcon = {
    nameL : input.name ? "cont-lavel" : '',
    nameI : input.name ? "cont-input" : '',
    emailI : input.email ? "cont-input" : '',
    emailL : input.email ? "cont-lavel" : '',
    unameL : input.username ? "cont-lavel" : '',
    unameI : input.username ? "cont-input" : '',
    passL : input.password ? "cont-lavel" : '',
    passI : input.password ? "cont-input" : ''
  }
  
  

  // handle Input data
  const handleInput = (e) => {
    // setInput({...input, [e.target.name] : e.target.value})
    setInput( (prev) => ({...prev, [e.target.name] : e.target.value}));

  }

  const handleUserRegister = async (e) => {
    e.preventDefault();


    try {

      if(!input.name || !input.email || !input.username || !input.password ){
        // alert('all filed are require')
        // swl('Danger', 'all filds are require', 'error')
        creatToast('All filds are required')
      }else{

      }
      

    }catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="auth-container-content">
      <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
        <div className="auth-form-box">

          <div className="logo-box">
              <img src={authlogo} alt="" />
          </div>

          <div className="head-text">
            <h5>Sign up to see photos and videos from your friends.</h5>
          </div>
          
          <div className="account-with">
            <div className="account-with-btn ">
              <a href=""><button className='btn btn-sm '> <div className='text'> <AiFillFacebook/> Log in with Facebook</div></button></a>
            </div>
          </div>

          <div className="divider-or">
            OR
          </div>

          <div className="input-form">
            <form onSubmit={handleUserRegister} action="#">

              <div className="inp-box">
                <label htmlFor='name_fild'  className={inpDcon.nameL}>Full Name</label>
                <input value={input.name}  onChange={handleInput} id='name_fild' className={inpDcon.nameI} name='name' type="text" />
              </div>

              <div className="inp-box">
                <label htmlFor='emali_fild'  className={inpDcon.emailL}>Email</label>
                <input value={input.email}  onChange={handleInput} id='email_fild' className={inpDcon.emailI} name='email' type="text" />
              </div>

              <div className="inp-box">
                <label htmlFor='uname_fild'  className={inpDcon.unameL}>Username</label>
                <input value={input.username}  onChange={handleInput} id='uname_fild' className={inpDcon.unameI} name='username' type="text" />
              </div>

              <div className="inp-box">
                <label htmlFor='pass_fild'  className={inpDcon.passL}>Password</label>
                <input value={input.password} minLength={0} onChange={handleInput} id='pass_fild' className={inpDcon.passI} name='password' type="password" />
              </div>

              {
                /* <div className="inp-box2">
                  <label className='inp-box-lavel'>
                    <span  className='box-lavel cont-lavel '>Mobile Number or Email</span>
                    <input value={input.email}  onChange={handleInput} className='box-input cont-input' name='email' type="text" />
                  </label>
                </div>
                <div className="inp-box2">
                  <label className='inp-box-lavel'>
                    <span  className={nameLAct} >Full Name</span>
                    <input value={input.name}  onChange={handleInput} className={nameIAct} name='name' type="text" />
                  </label>
                </div>
                <div className="inp-box2">
                  <label className='inp-box-lavel'>
                    <span  className='box-lavel cont-lavel '>User Name</span>
                    <input value={input.username}  onChange={handleInput} className='box-input cont-input' name='username' type="text" />
                  </label>
                </div>
                <div className="inp-box2">
                  <label className='inp-box-lavel'>
                    <span  className='box-lavel cont-lavel '>Password</span>
                    <input value={input.password}  onChange={handleInput} className='cont-input' name='password' type="text" />
                  </label>
                </div>
                <input type="text" placeholder='Mobile Number or Email'/> 
                <input type="text" placeholder='Full Name'/> 
                <input type="text" placeholder='Username'/> 
                <input type="text" placeholder='Password'/>  */
              }

              <p className='sign-up-msg'>
                People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a> <br /><br /> {/*<div className='space-br' /> <div className='space-br' />*/}
                By signing up, you agree to our Terms , <a  href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>.
              </p>
              <input className=' submit-btn ' type="submit" value="Sign up"/>
            </form>
          </div>       


        </div>

        <div className=" if-account-or-not">
          <span><h5 className=''>Have an account? <Link to={"/login"}>Log in</Link></h5></span>
        </div>

        <div className="get-app">
          <div className="text"><p>Get the app.</p></div>
          <div className="app">
            <div className="app-box">
              <div className="google">
                <img src={playStore} alt="" />
              </div>
              <div className="apple">
                <img src={appleStore} alt="" />
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </>
  )
}

export default AuthRegister