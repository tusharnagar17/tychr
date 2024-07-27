'use client';
import EmailSender from '@/components/EmailSender';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const ForgotPasswordPage = () => {
  const [tempCode, setTempCode] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    router.push({
      pathname: '/reset-password',
      query: { code: tempCode },
    });
  };
  if (!email) {
    return <EmailSender setEmail={setEmail} />;
  }
  return (
    <div className="">
      <div className="form-heading">Sign In</div>
      <form onSubmit={handleFormSubmit} className="flex flex-col justify-center items-center">
        <p className="text-lg text-center text-[#585858] my-4">
          Enter the code send to your mail id.
        </p>
        <label htmlFor="code" className="w-full">
          <OtpInput
            name="code"
            value={tempCode}
            onChange={setTempCode}
            numInputs={4}
            // separator={<span style={{ width: '8px' }}></span>}
            isInputNum={true}
            shouldAutoFocus={true}
            inputStyle={{
              borderBottom: '2px solid black',
              width: '54px',
              height: '54px',
              fontSize: '20px',
              color: '',
              fontWeight: '500',
              caretColor: 'blue',
              backgroundColor: 'white',
            }}
            focusStyle={{
              borderBottom: '0.5px solid #87CEEB',
              outline: 'none',
            }}
            renderSeparator={<span> </span>}
            renderInput={(props) => (
              <input {...props} className="outline-none hover:border-b-2 border-sky-500" />
            )}
            containerStyle="justify-center space-x-4 bg-white outline-none px-2 hover:ring-4 ring-sky-500 hover:border-none rounded-xl py-2 border border-gray-500"
          />
        </label>

        <p className="my-6  w-full pl-6 text-sm text-[#585858] mb-14">Resend in 01:00</p>

        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
