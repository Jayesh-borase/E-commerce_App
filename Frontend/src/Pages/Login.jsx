import React, { useState } from 'react';
import Layout from "../Components/Layout"
import './Login.css';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { phone, password });
  };

  return (
    <Layout>
      <div className="auth-container login-page">
        <div className="auth-background">
          <div className="auth-gradient"></div>
        </div>
        
        <div className="auth-card">
          <div className="auth-header">
            <div className="logo">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.4 5.2 16.4H17M17 16C16.5 16 16 16.5 16 17C16 17.5 16.5 18 17 18C17.5 18 18 17.5 18 17C18 16.5 17.5 16 17 16ZM9 17C9 17.5 8.5 18 8 18C7.5 18 7 17.5 7 17C7 16.5 7.5 16 8 16C8.5 16 9 16.5 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="logo-text">ShopHub</span>
            </div>
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <div className="input-container">
                <input
                  type="tel"
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                  required
                />
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.52 21.53 20.99 20.96 21.08C20.52 21.15 20.06 21.18 19.59 21.18C10.17 21.18 2.5 13.53 2.5 4.11C2.5 3.64 2.53 3.18 2.6 2.74C2.69 2.17 3.16 1.7 3.76 1.7H6.76C7.31 1.7 7.77 2.11 7.87 2.65C7.96 3.14 8.02 3.64 8.02 4.11C8.02 9.01 11.91 12.9 16.81 12.9C17.28 12.9 17.78 12.96 18.27 13.05C18.81 13.15 19.22 13.61 19.22 14.16V17.16C19.22 17.71 18.81 18.17 18.27 18.27C17.78 18.36 17.28 18.42 16.81 18.42C15.94 18.42 15.08 18.3 14.25 18.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5 6.5C17.0304 6.5 17.5391 6.71071 17.9142 7.08579C18.2893 7.46086 18.5 7.96957 18.5 8.5M21.5 3.5C22.0304 3.5 22.5391 3.71071 22.9142 4.08579C23.2893 4.46086 23.5 4.96957 23.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-container">
                <input
                  type="password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <div className="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15V17M6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V13C20 12.4696 19.7893 11.9609 19.4142 11.5858C19.0391 11.2107 18.5304 11 18 11H6C5.46957 11 4.96086 11.2107 4.58579 11.5858C4.21071 11.9609 4 12.4696 4 13V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11V7C16 5.67392 15.4732 4.40215 14.5355 3.46447C13.5979 2.52678 12.3261 2 11 2C9.67392 2 8.40215 2.52678 7.46447 3.46447C6.52678 4.40215 6 5.67392 6 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            
            <button type="submit" className="auth-button primary">
              Sign In
            </button>
          </form>
          
          <div className="auth-footer">
            <p>
              Don't have an account? <a href="/signup" className="auth-link">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;