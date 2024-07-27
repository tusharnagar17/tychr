import React, { useState } from 'react';
import Image from 'next/image';
import { forgotPasswordEmail } from '@/services/userService';

const EmailSender = ({ setEmail }) => {
  const [temp, setTemp] = useState('');

  const handleSubmitForm = async (ev) => {
    ev.preventDefault();
    // send request to server
    if (!temp) {
      alert('Kindly fill the email!');
      return;
    }
    await forgotPasswordEmail(temp);

    setEmail(temp);
  };
  return (
    <div>
      <div className="form-heading">FORGOT PASSWORD</div>
      <form onSubmit={handleSubmitForm}>
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
            placeholder="Enter you email"
            id="email"
            className="form-input"
            value={temp}
            onChange={(ev) => setTemp(ev.target.value)}
          />
        </label>
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailSender;
