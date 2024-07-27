import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProfileSelection = ({ setProfile, setProfileSubmitted }) => {
  const router = useRouter();
  const [temp, setTemp] = useState('');

  const handleProfile = () => {
    if (!temp) {
      alert('Kindly Select a option');
      return;
    }
    setProfile(temp);
    router.push('/register');
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="my-6 text-3xl font-roboto-serif font-semibold">Are you?</div>
      <button
        onClick={() => setTemp('tutor')}
        className={`flex items-center my-2 border rounded-md py-1 px-2 bg-white  ${
          temp === 'tutor' ? 'border-4 border-sky-500' : 'border-gray-800 hover:border-2'
        }`}
      >
        <Image
          src="/icons/fullname.png"
          width={15}
          height={15}
          style={{ height: '20px', width: '20px' }}
          alt="Tutor"
        />
        <p className="form-input font-semibold text-lg">Tutor</p>
      </button>
      <button
        onClick={() => setTemp('student')}
        className={`flex items-center my-2 border rounded-md py-1 px-2 bg-white  ${
          temp === 'student' ? 'border-4 border-sky-500' : 'border-gray-800 hover:border-2'
        }`}
      >
        <Image
          src="/icons/fullname.png"
          width={15}
          height={15}
          style={{ height: '20px', width: '20px' }}
          alt="Student"
        />
        <p className="form-input font-semibold text-lg">Student</p>
      </button>
      <button onClick={handleProfile} className="form-button">
        NEXT
      </button>
    </div>
  );
};

export default ProfileSelection;
