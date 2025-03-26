"use client";

import React, { useState } from 'react';
import axios from 'axios';
import '../CommonCss/UserRegister.css'

const UserLogin: React.FC = () => {
  const [userType, setUserType] = useState('patient'); 
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: '',
    username: '',
    email: ''
  });

  // Handle changes in input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.example.com/register', {
        userType,
        ...formData
      });
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">User Login</h1>
      {/* User Type Selection */}
      <label>
        Select User Type:
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        </select>
      </label>

      <form onSubmit={handleSubmit} className="register-form">
        {/* Fields for Patient */}
        {userType === 'patient' && (
          <>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="form-input"
                required
              />
            </div>
          </>
        )}

        {/* Fields for Doctor */}
        {userType === 'doctor' && (
          <>
            <div className="form-group">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="form-input"
                required
              />
            </div>
          </>
        )}

        {/* Fields for Admin */}
        {userType === 'admin' && (
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="form-input"
              required
            />
          </div>
        )}

        {/* Password Field for All User Types */}
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default UserLogin;
