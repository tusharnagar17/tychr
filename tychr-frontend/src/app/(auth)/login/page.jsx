'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { getCurrentUser, loginRequest } from '@/services/userService';
import { useRouter } from 'next/navigation';
import GoogleAuthButton from '@/components/GoogleAuthButton';

const blankData = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [formData, setFormData] = useState(blankData);
  const [error, setError] = useState('');
  const router = useRouter();

  // form data change
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // formSubmit
  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    const { email, password } = formData;
    if (!(email && password)) {
      alert('kindly fill all the details!');
      return;
    }
    try {
      const temp = await loginRequest(email, password);
      console.log('temp', temp);

      if (temp.jwt && temp.user) {
        router.push('/');
      }

      setFormData(blankData);
    } catch (error) {
      console.log('error while loggin', error.message);
      if (error.message.includes('Network Error')) {
        setError('Network Error !');
      } else if (error.message.includes("Cannot read properties of undefined (reading 'jwt')")) {
        setError('Wrong Credentials! Please Try again');
      }
    }
  };
  return (
    <div>
      <div className="form-heading">Sign In</div>
      <div className="text-[#C90000] text-[14px] font-medium">{error}</div>
      <form onSubmit={handleFormSubmit} className="flex flex-col">
        {/* Email */}
        <label htmlFor="email" className="form-label">
          <Image
            src="/icons/email.png"
            width={15}
            height={15}
            style={{ height: '20px', width: '20px' }}
            alt="email"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        {/* Password */}
        <label htmlFor="password" className="form-label">
          <Image
            src="/icons/email.png"
            width={15}
            height={15}
            style={{ height: '20px', width: '20px' }}
            alt="confirmPassword"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <Link href="forgot-password" className="text-end mb-20 text-base font-medium">
          Forgot Password ?
        </Link>
        <button type="submit" className="form-button">
          NEXT
        </button>
      </form>
      <div className="text-lg text-center">
        Already have an Account.{' '}
        <Link href="/register" className="font-semibold text-blue-950">
          Sign Up!
        </Link>
      </div>
      <GoogleAuthButton text={'Google Sign In'} />
    </div>
  );
};

export default LoginPage;
