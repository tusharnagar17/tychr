'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const blankData = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

const RegisterPage = () => {
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
        {/* Name */}
        <label htmlFor="name" className="form-label">
          <Image
            src="/icons/fullname.png"
            width={15}
            height={15}
            style={{ height: '20px', width: '20px' }}
            alt="name"
          />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </label>
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
        <div className="text-center text-[18px] font-semibold">OR</div>
        {/* Phone */}
        <label htmlFor="phone" className="form-label">
          <Image
            src="/icons/email.png"
            width={15}
            height={15}
            style={{ height: '20px', width: '20px' }}
            alt="phone"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            id="phone"
            value={formData.phone}
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
            alt="password"
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
        {/* Confirm Password */}
        <label htmlFor="confirmPassword" className="form-label">
          <Image
            src="/icons/email.png"
            width={15}
            height={15}
            style={{ height: '20px', width: '20px' }}
            alt="confirmPassword"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          NEXT
        </button>
      </form>
      <div className="text-lg text-center">
        Already have an Account.{' '}
        <Link href="/login" className="font-semibold text-blue-950">
          Sign in!
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
