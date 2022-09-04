
import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './AuthRegister.scss'
import authlogo from '../../AuthImges/authlogo.png'
import appleStore from '../../AuthImges/apple-store.png'
import playStore from '../../AuthImges/play-store.png'
import {AiFillFacebook} from 'react-icons/ai'
import { useState } from 'react'
import swla from 'sweetalert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AuthRegister = () => {

  // create a tost
  const creatToast = (msg) => {
    return toast.warn(msg)
  }
  const creatToastSucc = (msg) => {
    return toast(msg)
  }

    // error/alert msg 
    const [msg , setMsg] = useState({
      type : "",
      message : "",
      status : false,
      pVerify : false
    })
    // alert close
    const alertClose = () => {
      setMsg({
        type : "",
        message : "",
        status : false,
        pVerify : false
      })
    }

  // state for form fild
  const [input, setInput] = useState({
    email : '',
    name : "",
    username : "",
    cell : "",
    password : ""

  })
  
  // console.log(input);

  // try input design con
  const inpDcon = {
    nameL : input.name ? "cont-lavel" : '',
    nameI : input.name ? "cont-input" : '',
    emailI : input.email ? "cont-input" : '',
    emailL : input.email ? "cont-lavel" : '',
    unameL : input.username ? "cont-lavel" : '',
    unameI : input.username ? "cont-input" : '',
    cellL : input.cell ? "cont-lavel" : '',
    cellI : input.cell ? "cont-input" : '',
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
        // swla('Danger', 'all filds are require', 'error')
        creatToast('All filds are required')
      }else{
        axios.post('http://localhost:5050/api/user/register', input)
        .then(res => {
          
          const ifPhone = `Hi ${res.data.name} your account created Please verify account with mail or go phone verify`;
          const ifNotPhone = `Hi ${res.data.name} your account created Please verify account with mail`;
          const verifyMsg = res.data.reqPhoneCode ? ifPhone : ifNotPhone ;

          setMsg({
            type : "success",
            message : res.data.reqPhoneCode ? `Verify Email or for phone verify` : "Verify with mail?",
            status : true,
            pVerify : res.data.reqPhoneCode ? true : false 
          })
          setInput((prev) => ({
            email : '',
            name : "",
            username : "",
            password : "",
            cell : ""
          }))

          

          console.log(res.data.name);
          console.log(res.data.reqPhoneCode);

          // creatToastSucc('Data Post Succfuly');
          swla("Success", verifyMsg, "success")
          
        })


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

          <div className="alert-box">
            {
              msg.status &&<> <h6 className={`alert alert-${msg.type}`}> <p> {msg.message}</p> {msg.pVerify && <Link to={'/user/mobile-verify'}>Go</Link>} <span onClick={alertClose}>X</span></h6> </>
            }
            
          </div>
          {
            !msg.status && <div className="divider-or"> OR </div>

          }

          <div className="input-form">
            <form onSubmit={handleUserRegister} action="#">

              {/* input fields */}
              <div className="inp-box">
                <label htmlFor='name_fild'  className={inpDcon.nameL}>Full Name</label>
                <input value={input.name}  onChange={handleInput} id='name_fild' className={inpDcon.nameI} name='name' type="text" />
              </div>

              <div className="inp-box">
                <label htmlFor='emali_fild'  className={inpDcon.emailL}>Email</label>
                <input value={input.email}  onChange={handleInput} id='email_fild' className={inpDcon.emailI} name='email' type="text" />
              </div>
              <div className="inp-box">
                <label htmlFor='cell_fild'  className={inpDcon.cellL}>Phone (Optional)</label>
                <input value={input.cell}  onChange={handleInput} id='cell_fild' className={inpDcon.cellI} name='cell' type="text" />
              </div>

              <div className="inp-box">
                <label htmlFor='uname_fild'  className={inpDcon.unameL}>Username</label>
                <input value={input.username}  onChange={handleInput} id='uname_fild' className={inpDcon.unameI} name='username' type="text" />
              </div>

              <div className="inp-box">
                <label htmlFor='pass_fild'  className={inpDcon.passL}>Password</label>
                <input value={input.password} minLength={0} onChange={handleInput} id='pass_fild' className={inpDcon.passI} name='password' type="password" />
              </div>

              {/* from inner message */}
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