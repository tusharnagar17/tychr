'use client';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const ForgotPasswordPage = () => {
  const [code, setCode] = useState('');

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <div className="form-heading">Sign In</div>
      <form onSubmit={handleFormSubmit}>
        <p className="text-lg text-center text-[#585858] my-4">
          Enter the code send to you xyz@gmail.com mail id.
        </p>
        <label htmlFor="code" className="">
          <OtpInput
            value={code}
            onChange={setCode}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </label>

        <p className="my-6 text-sm text-[#585858] mb-14">Resend in 01:00</p>

        <button type="submit" className="form-button mx-auto">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
