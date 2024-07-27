'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const blankData = {
  email: '',
  phone: '',
  password: '',
};

const LoginPage = () => {
  const [formData, setFormData] = useState(blankData);

  // form data change
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // formSubmit
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log(formData);

    setFormData(blankData);
  };
  return (
    <div>
      <div className="form-heading">Sign Up</div>
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
    </div>
  );
};

export default LoginPage;
