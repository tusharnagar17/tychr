'use client';
import { ResetPassword } from '@/services/userService';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const { code } = router.query;

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    if (password != confirmPassword) {
      alert('Password must be same on both input');
      return;
    }
    await ResetPassword(code, password, confirmPassword);
  };

  return (
    <section>
      <div>Sign In</div>
      <form onSubmit={handleFormSubmit} className="flex flex-col">
        <label htmlFor="password" className="form-label">
          <Image
            src="/icons/fullname.png"
            width={15}
            height={15}
            style={{ height: '20px', width: '20px' }}
            alt="email"
          />
          <input
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="form-input"
            placeholder="New Password"
          />
        </label>
        <label htmlFor="confirmPassword" className="form-label">
          <Image
            src="/icons/fullname.png"
            width={15}
            height={15}
            style={{ height: '20px', width: '20px' }}
            alt="email"
          />
          <input
            type="password"
            className="form-input"
            value={confirmPassword}
            onChange={(ev) => setConfirmPassword(ev.target.value)}
            placeholder="Confirm Password"
          />
        </label>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ResetPasswordPage;
