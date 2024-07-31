'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { RiSettings4Fill } from 'react-icons/ri';
import { IoSearch } from 'react-icons/io5';
import Link from 'next/link';
import { SearchAll } from '@/services/CourseService';

const Header = ({ user }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (ev) => {
    const { text } = ev.target.value;

    setSearchText(text);
  };

  const handleSearch = async () => {
    if (!text) {
      alert('kindly input something');
      return;
    }
    try {
      const res = await SearchAll(text);

      console.log('response from serachres');
    } catch (error) {
      console.log(error);
    }
  };

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
          value={searchText}
          onChange={handleChange}
        />
        <button className="bg-[#002C4C] flex p-2 rounded-full" onClick={handleSearch}>
          <IoSearch size={20} color="white" />
        </button>
      </div>
      {/* User Section */}
      <div className="flex items-center gap-4 relative group">
        <div className="bg-gray-200 p-1 rounded-full hover:cursor-pointer">
          <RiSettings4Fill size={25} />
        </div>
        <div className="hover:cursor-pointer">
          <Image src="/user-avatar.png" width={50} height={50} alt="profile-image" />
        </div>

        {/* Profile hover options */}
        <div className="absolute -translate-x-40 flex flex-col justify-center items-center py-10 top-16 w-72 h-auto bg-[#EFEFEF] z-20 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <Image src="/user-avatar.png" width={50} height={50} alt="profile-image" />
          </div>
          <div className="text-base font-semibold">{user?.username}</div>
          <div className="text-sm font-medium text-[#6C6C6C]">{user?.profile}</div>
          <button className="bg-[#002C4C] rounded-xl text-xl w-60 h-8 text-white font-roboto-serif  py-1 text-[18px] font-semibold mt-6">
            Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
