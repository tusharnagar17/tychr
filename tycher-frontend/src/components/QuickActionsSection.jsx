import React from 'react';
import { IoCode, IoCodeSlashOutline } from 'react-icons/io5';

const QuickActionsSection = () => {
  return (
    <div className="mr-10">
      <div className="pl-4 text-lg font-roboto-serif font-semibold text-black mt-6">
        Quick Actions
      </div>
      <div className="flex items-start justify-between gap-4">
        {/* Subject offered */}
        <Wrapper>
          <div className="text-[#002C4C] font-semibold font-roboto-serif text-[16px]">
            Subjects offered under groups
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {[0, 1, 2, 3, 4].map((item, ind) => (
              <div key={ind} className="flex items-center gap-2 px-2 py-1 bg-gray-200 rounded-md">
                <IoCodeSlashOutline /> development
              </div>
            ))}
          </div>
        </Wrapper>
        {/* Subjects */}
        <Wrapper>
          <div className="text-[16px] font-roboto-serif font-semibold text-[#002C4C]">
            Subjects
          </div>
          <div className="flex flex-wrap gap-2">
            {[0, 1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-1">
                  <IoCodeSlashOutline /> {'HTML'}
                </div>
              );
            })}
          </div>
        </Wrapper>
        <Wrapper className={'relative'}>
          <div className="text-[#002C4C] font-semibold font-roboto-serif text-[16px]">
            Manage Your Progress
          </div>
          <p className="text-[#002C4C]">
            Lorem ipsum dolor sit amet consectetur. In at aliquet volutpat posuere tincidunt
            libero. Eget augue eu quis in vehicula bibendum massa quis dolor. Purus eleifend eu
            sollicitudin pellentesque tortor tincidunt cras curabitur dictum. Ipsum ut quis pretium
            purus.
          </p>
          <button className="absolute bottom-6 w-[151px] bg-[#002C4C] rounded-md py-1 px-1 font-roboto-serif font-semibold text-white">
            Manage
          </button>
        </Wrapper>
      </div>
    </div>
  );
};

const Wrapper = ({ children, className }) => {
  return (
    <div className={`${className} bg-[#EBFFF8A6] h-[296px]  flex-1 p-4 rounded-xl`}>
      {children}
    </div>
  );
};

export default QuickActionsSection;
