
"use client";

// import React, { useState } from 'react';
// import axios from 'axios';
// import '../CommonCss/UserRegister.css';

// const UserRegister: React.FC = () => {
//   const [userType, setUserType] = useState('patient');
//   const [formData, setFormData] = useState({
//     id: '',
//     name: '',
//     age: '',
//     gender: '',
//     caste: '',
//     address: '',
//     mobile: '',
//     email: '',
//     password: '',
//     contact: '',
//     specialization: '',
//     qualifications: '',
//     experience: '',
//     fees: '',
//     available: '',
//     isActive: false,
//     isVerify: false,
//     token: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://api.example.com/register', formData);
//       console.log('User registered:', response.data);
//     } catch (error) {
//       console.error('Error registering user:', error);
//     }
//   };

//   return (
//     <div className="register-container">
//       <h1 className="register-title">User Registration</h1>
//       <label>
//         Select User Type:
//         <select value={userType} onChange={(e) => setUserType(e.target.value)} className='mb-3'>
//           <option value="patient">Patient</option>
//           <option value="doctor">Doctor</option>
//         </select>
//       </label>
//       <form onSubmit={handleSubmit} className="register-form">
//         <div className="form-group">
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="form-input" required />
//         </div>
//         {userType === 'patient' && (
//           <>
//             <div className="form-group">
//               <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="form-input" required />
//             </div>
//             <div className="form-group">
//               <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" className="form-input" required />
//             </div>
//             <div className="form-group">
//               <input type="text" name="caste" value={formData.caste} onChange={handleChange} placeholder="Caste" className="form-input" />
//             </div>
//             <div className="form-group">
//               <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="form-input" required />
//             </div>
//             <div className="form-group">
//               <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" className="form-input" required />
//             </div>
//             <div className="form-group">
//               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email (optional)" className="form-input" />
//             </div>
//           </>
//         )}
//         {userType === 'doctor' && (
//           <>
//             <div className="form-group">
//               <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Specialization" className="form-input" required />
//             </div>
//             <div className="form-group">
//               <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} placeholder="Qualifications" className="form-input" required />
//             </div>
//             <div className="form-group">
//               <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience" className="form-input" required />
//             </div>
//             <div className="form-group">
//               <input type="text" name="fees" value={formData.fees} onChange={handleChange} placeholder="Consultation Fees" className="form-input" required />
//             </div>
//             <div className="form-group">
//               <input type="text" name="available" value={formData.available} onChange={handleChange} placeholder="Available Timing" className="form-input" required />
//             </div>
//             <div className="form-group">
//               <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Clinic Address" className="form-input" required />
//             </div>
//             <div className="form-group">
//               <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" className="form-input" required />
//             </div>
//             <div className="form-group">
//               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-input" required />
//             </div>
//           </>
//         )}
//         <div className="form-group">
//           <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="form-input" required />
//         </div>
//         <div className="form-group">
//           <label>
//             <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} className="form-checkbox" /> Active
//           </label>
//         </div>
//         <button type="submit" className="submit-button">Register</button>
//       </form>
//     </div>
//   );
// };

// export default UserRegister;

















import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import '../CommonCss/UserRegister.css';

// interface User {
//   id: number;
//   name: string;
//   gender: string;
//   contact: string;
//   email: string;
//   age: number;
//   bloodGroup: string;
//   adharNo: string;
//   isActive: boolean;
//   token: string;
//   password: string;
// }

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  gender: yup.string().required('Gender is required'),
  contact: yup.string().required('Contact is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  age: yup.number().positive().integer().required('Age is required'),
  bloodGroup: yup.string().required('Blood Group is required'),
  adharNo: yup.string().required('Adhar No is required'),
  isActive: yup.boolean(),
  token: yup.string().required('Token is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const UserRegister: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('/register', data);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">User Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <div className="form-group">
          <input type="text" {...register('name')} placeholder="Name" className="form-input" />
          <p className="error-message">{errors.name?.message}</p>
        </div>

        <div className="form-group">
          <input type="text" {...register('gender')} placeholder="Gender" className="form-input" />
          <p className="error-message">{errors.gender?.message}</p>
        </div>

        <div className="form-group">
          <input type="text" {...register('contact')} placeholder="Contact" className="form-input" />
          <p className="error-message">{errors.contact?.message}</p>
        </div>

        <div className="form-group">
          <input type="email" {...register('email')} placeholder="Email" className="form-input" />
          <p className="error-message">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <input type="number" {...register('age')} placeholder="Age" className="form-input" />
          <p className="error-message">{errors.age?.message}</p>
        </div>

        <div className="form-group">
          <input type="text" {...register('bloodGroup')} placeholder="Blood Group" className="form-input" />
          <p className="error-message">{errors.bloodGroup?.message}</p>
        </div>

        <div className="form-group">
          <input type="text" {...register('adharNo')} placeholder="Adhar No" className="form-input" />
          <p className="error-message">{errors.adharNo?.message}</p>
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" {...register('isActive')} className="form-checkbox" /> Active
          </label>
        </div>

        <div className="form-group">
          <input type="text" {...register('token')} placeholder="Token" className="form-input" />
          <p className="error-message">{errors.token?.message}</p>
        </div>

        <div className="form-group">
          <input type="password" {...register('password')} placeholder="Password" className="form-input" />
          <p className="error-message">{errors.password?.message}</p>
        </div>

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;

