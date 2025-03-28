"use client";

// import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import '../CommonCss/UserRegister.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  gender: yup.string().required('Gender is required'),
  contact: yup.string().required('Contact is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  age: yup.number().positive().integer().required('Age is required'),
  specialization: yup.string().when('userType', {
    is: 'doctor',
    then: yup.string().required('Specialization is required'),
  }),
  qualifications: yup.string().when('userType', {
    is: 'doctor',
    then: yup.string().required('Qualifications are required'),
  }),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  isActive: yup.boolean(),
});

const UserRegister: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const userType = watch('userType', 'patient');

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('/register', data);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="container mt-4 mb-4">
      <div className="row justify-content-center">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 regDiv border border-secondary rounded">
          <h1 className='register text-light mb-4 mt-3'>Registration Form</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="register-form">
            {/* User Type Dropdown */}
            <div className="form-group">
              <select {...register('userType')} className="form-input">
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            {/* Common Fields */}
            <div className="form-grid">
              <div className="form-group">
                <input type="text" {...register('name')} placeholder="Name" className="form-input" />
                <p className="error-message">{errors.name?.message}</p>
              </div>
              <div className="form-group">
                <input type="text" {...register('contact')} placeholder="Contact" className="form-input" />
                <p className="error-message">{errors.contact?.message}</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <input type="email" {...register('email')} placeholder="Email" className="form-input" />
                <p className="error-message">{errors.email?.message}</p>
              </div>
              <div className="form-group">
                <input type="number" {...register('age')} placeholder="Age" className="form-input" />
                <p className="error-message">{errors.age?.message}</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <input type="text" {...register('gender')} placeholder="Gender" className="form-input" />
                <p className="error-message">{errors.gender?.message}</p>
              </div>
              {userType === 'patient' && (
                <div className="form-group">
                  <input type="password" {...register('password')} placeholder="Password" className="form-input" />
                  <p className="error-message">{errors.password?.message}</p>
                </div>
              )}
              {userType === 'doctor' && (
                <div className="form-group">
                  <input type="text" {...register('qualifications')} placeholder="Qualifications" className="form-input" />
                  <p className="error-message">{errors.qualifications?.message}</p>
                </div>
              )}
            </div>

            {userType === 'doctor' && (
              <>
                <div className="form-grid">
                  <div className="form-group">
                    <input type="text" {...register('specialization')} placeholder="Specialization" className="form-input" />
                    <p className="error-message">{errors.specialization?.message}</p>
                  </div>
                  <div className="form-group">
                    <input type="password" {...register('password')} placeholder="Password" className="form-input" />
                    <p className="error-message">{errors.password?.message}</p>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" {...register('isActive')} className="form-checkbox" /><span className='text-light'>Active</span>
                  </label>
                </div>
              </>
            )}

            <button type="submit" className="submit-button mb-4">Register</button>
          </form>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default UserRegister;





