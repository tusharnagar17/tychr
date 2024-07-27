'use client';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import Image from 'next/image';

// SideBarOptions
const sideBarOptions = [
  { name: 'Home', icon: '/icons/home.png', link: '/' },
  { name: 'Course', icon: '/icons/course.png', link: '/' },
  { name: 'Live', icon: '/icons/live.png', link: '/' },
  { name: 'Educators', icon: '/icons/educators.png', link: '/' },
  { name: 'Settings', icon: '/icons/settings.png', link: '/' },
  { name: 'Profile', icon: '/icons/profile.png', link: '/' },
  { name: 'Contact Us', icon: '/icons/contact.png', link: '/' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative mt-2 h-full">
      <ToggleButton toggleSidebar={toggleSidebar} isOpen={isOpen} />
      {isOpen && (
        <div className="w-[185px] bg-[#ECFBF6] flex flex-col justify-start items-center h-full">
          {/* User detail */}
          <div className="flex flex-col justify-center items-center py-10">
            <div>
              <Image src="/user-avatar.png" width={50} height={50} alt="profile-image" />
            </div>
            <div className="text-sm font-semibold">Username</div>
            <div className="text-xs text-[#6C6C6C]">Role</div>
          </div>
          <div className="">
            {sideBarOptions.map((item, index) => (
              <Link href={item.link} key={index} className="flex gap-4 my-2 items-center py-1">
                <div>
                  <Image src={item.icon} width={20} height={20} alt={item.name} />
                </div>
                <div className="text-sm font-semibold font-roboto-serif">{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ToggleButton = ({ toggleSidebar, isOpen }) => {
  return (
    <button
      onClick={toggleSidebar}
      className={`p-2 rounded-full bg-[#E3E3E3]  ${
        isOpen ? 'absolute right-4 top-4 bg-[#002C4C]' : 'ml-4 mt-2'
      }`}
    >
      <RxHamburgerMenu />
    </button>
  );
};

export default Sidebar;
