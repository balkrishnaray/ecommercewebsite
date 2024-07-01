import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react';

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className='loginsignup'>
     <div className="loginsignup-container">
      <h1>{action}</h1>
      <div className="loginsignup-fields">
        {action !== "Login"? <input type="text" placeholder='Your Name' /> :<div></div> }
        
        <input type="email" placeholder='Your Email' />
        <input type="password" placeholder='Your Password' />
        </div>
      <button>Continue</button>
      <p className="loginsignup-login" >{action==="Login"?"":"Already Have an account?"} <span className={action==="Login"? "old":"new"} onClick={()=>{
        setAction("Login");
      }}>Login here</span></p>
      <div className="loginsignup-agree">
        <input type='checkbox' name = '' id= ''/>
        <p>By continuing, i agree to the terms of use and privacy policy</p>
      </div>
     </div>
    </div>
  )
}
