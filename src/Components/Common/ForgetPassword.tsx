"use client"
import React, { useState } from 'react';
import axios from 'axios';
import '../CommonCss/UserRegister.css'

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/forgot-password', { email });
      setMessage('Password reset link sent to your email.');
    } catch (error) {
      setMessage('Error sending password reset link.');
    }
  };

  return (
<div className="container">
  <div className="row">
    <div className="col-sm-4"></div>
    <div className="col-sm-4 border border-2 mt-2 mb-2">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send Reset Link</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
    <div className="col-sm-4"></div>
  </div>
</div>
  );
}

export default ForgotPassword;

