import React from 'react'
import { Banner, Logo } from '../../../assets/images'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div class="login-bg" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="auth-wraper">
        <div className="auth-wraper-inner">
        <div className="auth-main-inner">
        <div class="login-logo">
            <img alt="Logo" src={Logo} />
            </div>
            <div className="auth-card">
            <div class="auth-top">
            <h3>Welcome to <span>PIE</span> Login.</h3>
      </div>
      <div className='auth-main'>
      <div className="form-inputs">
              <label className="form-label">
              User Name<i>*</i>
              </label>
              <div class="inputwth-icon">
                  <input
                    type="text"
                    name="user-name"
                    className="form-control"
                    placeholder="Enetr user name"
                  />
                  <div className="input-icon">
                  <span className="useravlbl-chk"><i class="fa-solid fa-circle-check"></i></span>
                    <span className="usernotavlbl-chk" style={{ display: 'none' }}><i class="fa-solid fa-circle-xmark"></i></span>
                  </div>
                  </div>
            </div>
            <div className="form-inputs">
              <label className="form-label">
             Password<i>*</i>
              </label>
              <input
                type="password"
                name="newpassword"
                className="form-control"
                placeholder="**********" 
              />
            </div>
            <div class="rmbrfrgt-main">
              <div class="frgot-btn">
                <Link href="/login">Forgot Password?</Link>
                </div>
                </div>
                <div className="form-inputs">
              <label className="form-label">
             Company<i>*</i>
              </label>
              <input
                type="text"
                name="company"
                className="form-control"
                placeholder="Enter company name" 
              />
            </div>
            <div className="auth-btn">
                <Link to="/" className="btn primary-btn">Login</Link>
            </div>
      </div>
            </div>
        </div>
      </div>
      </div>
   </div>
    </>
  )
}

export default Login