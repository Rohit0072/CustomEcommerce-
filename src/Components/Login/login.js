import React, { useState } from "react";
import { ArrowUpRight, Eye, EyeOff, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="ecom__login__container">
        <div className="ecom__login__cards__container">
        <div className="ecom__login__card ecom__login__card--dark">
          <div className="ecom__login__icon__circle ecom__login__icon__circle--gold">
            <ArrowUpRight className="ecom__login__icon" />
          </div>
          <div className="ecom__login__form__container">
            <h3 className="ecom__login__form__title">Login</h3>
            <div className="ecom__login__input__group">
              <label className="ecom__login__label">Email</label>
              <div className="ecom__login__input__wrapper">
                <Mail className="ecom__login__input__icon" />
                <input type="email" className="ecom__login__input" placeholder="email@domain.com" />
              </div>
            </div>
            <div className="ecom__login__input__group">
              <label className="ecom__login__label">Password</label>
              <div className="ecom__login__input__wrapper">
                <Lock className="ecom__login__input__icon" />
                <input type={showLoginPassword ? "text" : "password"} className="ecom__login__input" placeholder="••••••••" />
                <button className="ecom__login__password__toggle" onClick={() => setShowLoginPassword(!showLoginPassword)}>
                  {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="ecom__login__forgot__password">
              <a href="#" className="ecom__login__forgot__link">Forgot password?</a>
            </div>
            <button className="ecom__login__submit__button">Login</button>
          </div>
          <Link to="/signin">Create an account</Link>
        </div>
      </div>
    </div>
  );
}