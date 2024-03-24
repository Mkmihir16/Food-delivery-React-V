import React, { useState } from 'react';
import "./Loginpage.css";
import { assets } from '../../src/assets/assets';
import "./Responsive-login-page.css"
function Loginpage({ setLogin }) {
  const [currentState, setcurrentState] = useState("Sign Up")
  function sethandlerfun() {
    currentState === "Log In" ? setcurrentState("Sign Up") : setcurrentState("Log In")
  }
  return (
    <div className="main-login-page">
      <div className="login-page-container">
        <div className="page-name-loginpage">
          <h1>{currentState}</h1>
          <img onClick={() => setLogin("off")} src={assets.cross_icon} alt="Close" />
        </div>
        <form action="">
          <div className="sign-up">
            {currentState === "Sign Up" ? <><input placeholder='First Name' required></input> <input placeholder='Last Name' required></input></> : <></>}
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
            {currentState === "Sign Up" ? <button className='createacc'>Create Your Account</button> : <button className='createacc'>Login</button>}
          </div>

        </form>
        <div className="checkandpara">
          <div className="sub-checkandpara">
          <input type="checkbox" /><p>Accept all the terms and conditions.</p>
          </div>
         
        </div>

        <div className="accountinfo">
          {currentState === "Sign Up" ? <><p>Already Have Account? </p>
            <p className='loginpage-info' onClick={() => sethandlerfun()}>Log In</p></>:
            <>
            <p>Not have an account? </p>
            <p className='loginpage-info' onClick={() => sethandlerfun()}>Sign Up</p></>}
          </div>
        </div>
      </div>
      );
}

      export default Loginpage;
