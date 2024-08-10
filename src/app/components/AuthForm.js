"use client";

import { useEffect } from 'react';


export default function AuthForm() {
  useEffect(() => {
    const wrapper = document.querySelector('.lswrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPop = document.querySelector('.btn-primary');
    const iconClose = document.querySelector('.icon-close');

    if (!wrapper || !loginLink || !registerLink || !iconClose) return;

    const handleRegisterClick = () => {
      wrapper.classList.add('active');
    };

    const handleLoginClick = () => {
      wrapper.classList.remove('active');
    };

    const handleBtnPopClick = () => {
      wrapper.classList.add('active-popup');
    };

    const handleIconCloseClick = () => {
      wrapper.classList.remove('active-popup');
    };

    registerLink.addEventListener('click', handleRegisterClick);
    loginLink.addEventListener('click', handleLoginClick);
    btnPop?.addEventListener('click', handleBtnPopClick);
    iconClose.addEventListener('click', handleIconCloseClick);

    // Cleanup event listeners on component unmount
    return () => {
      registerLink.removeEventListener('click', handleRegisterClick);
      loginLink.removeEventListener('click', handleLoginClick);
      btnPop?.removeEventListener('click', handleBtnPopClick);
      iconClose.removeEventListener('click', handleIconCloseClick);
    };
  }, []);

  return (
    <>
      <div className="lswrapper">
          <span className="icon-close">
                  <ion-icon name="close"></ion-icon>
          </span>
          <div className="form-box login">
                  <h2>Login</h2>
                  <form action="#">
                  <div className="input-box">
                    <span className="icon">
                    <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="email" required />
                    <label>Email</label>
                  </div>
          <div className="input-box">
            <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forget Password?</a>
          </div>
          <button type="submit" className="lsbtn">Login</button>
          <div className="login-register">
            <p>
              Don't have an account?
              <a href="#" className="register-link">Register</a>
            </p>
          </div>
        </form>
      </div>
      <div className="form-box register">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
            <ion-icon name="person"></ion-icon>
            </span>
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
            <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Create Password</label>
          </div>
          <div className="input-box">
            <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label> Confirm Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="lsbtn">Register</button>
          <div className="login-register">
            <p>
              Already have an account?
              <a href="#" className="login-link">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
  
}
