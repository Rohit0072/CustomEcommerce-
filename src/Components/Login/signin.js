import React, { useState } from "react";
import { ArrowUpRight, Lock, User } from "lucide-react";
import "./login.css";


export default function Signin() {
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (<div className="sign_in_page ecom__login__card ecom__login__card--light">
            <div className="ecom__login__icon__circle ecom__login__icon__circle--dark">
              <ArrowUpRight className="ecom__login__icon" />
            </div>
            <div className="ecom__login__form__container">
              <h3 className="ecom__login__form__title">Sign Up</h3>
              <div className="ecom__login__input__group">
                <label className="ecom__login__label">Name & Email</label>
                <div className="ecom__login__input__wrapper">
                  <User className="ecom__login__input__icon" />
                  <input type="text" className="ecom__login__input" placeholder="Name" />
                </div>
                <div className="ecom__login__input__wrapper">
                  <User className="ecom__login__input__icon" />
                  <input type="text" className="ecom__login__input" placeholder="Email" />
                </div>
              </div>
              <div className="ecom__login__input__group">
                <label className="ecom__login__label">Password</label>
                <div className="ecom__login__input__wrapper">
                  <Lock className="ecom__login__input__icon" />
                  <input type={showSignupPassword ? "text" : "password"} className="ecom__login__input" placeholder="password password" />
                </div>
              </div>
              <div className="ecom__login__input__group">
                <label className="ecom__login__label">Confirm</label>
                <div className="ecom__login__input__wrapper">
                  <Lock className="ecom__login__input__icon" />
                  <input type={showConfirmPassword ? "text" : "password"} className="ecom__login__input" placeholder="Confirm password" />
                </div>
              </div>
              <button className="ecom__login__submit__button">Sign Up</button>
            </div>
          </div>)
}