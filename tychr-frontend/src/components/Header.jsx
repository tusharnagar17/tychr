import React from 'react';
import Image from 'next/image';
import { RiSettings4Fill } from 'react-icons/ri';
import { IoSearch } from 'react-icons/io5';
import Link from 'next/link';

const Header = () => {
  return (
    <section className="flex items-center justify-between px-20 py-2 shadow-lg">
      <div>
        <Link href="/">
          <Image src="/tycher-logo.png" width={150} height={150} alt="tycher-logo" />
        </Link>
      </div>
      {/* Search */}
      <div className="hover:ring-2 ring-gray-700 w-[415px] bg-gray-100 px-2 py-1 rounded-full flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for latest course"
          className="outline-none bg-transparent flex-1 px-1"
        />
        <button className="bg-[#002C4C] flex p-2 rounded-full">
          <IoSearch size={20} color="white" />
        </button>
      </div>
      {/* User Section */}
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 p-1 rounded-full hover:cursor-pointer">
          <RiSettings4Fill size={25} />
        </div>
        <div className="hover:cursor-pointer">
          <Image src="/user-avatar.png" width={50} height={50} alt="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Header;
