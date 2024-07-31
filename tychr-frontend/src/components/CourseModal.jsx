import React from 'react';

const CourseModal = ({ setIsOpen }) => {
  const stopPropagation = (e) => e.stopPropagation();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative border-2   bg-white w-[600px] p-4 rounded-lg">
        <button onClick={() => setIsOpen(false)} className="absolute right-5 top-5 font-bold">
          X
        </button>
        <div onClick={stopPropagation}>
          <div className="text-xl font-medium mb-4">PSYCHOLOGY</div>
          <div className="flex flex-col gap-4">
            {[0, 1, 2, 3, 4].map((item, index) => {
              return (
                <div className="border text-xl font-medium p-4 rounded-md border-[#002C4C] bg-[#ECFBF6]">
                  Chapter 1: Introduction to Basic Studies
                  <br />
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
