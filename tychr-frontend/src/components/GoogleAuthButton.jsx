import Image from 'next/image';
import React from 'react';

const GoogleAuthButton = ({ text }) => {
  return (
    <button className="border border-black flex justify-center items-center gap-2  hover:border-2 text-lg font-medium mt-6 w-full rounded-md h-11">
      <Image src="/icons/google.png" alt="google" width={20} height={20} />
      {text}
    </button>
  );
};

export default GoogleAuthButton;
