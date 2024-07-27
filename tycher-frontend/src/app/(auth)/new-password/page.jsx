'use client';
import React, { useState } from 'react';

const NewPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <div>Sign In</div>
      <form onSubmit={handleFormSubmit} className="flex flex-col">
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default NewPasswordPage;
