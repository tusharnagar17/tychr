'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

const VideoPage = () => {
  const { id } = useParams();
  return (
    <div className="flex w-full pt-10">
      <div className="mx-auto">
        {/* video div */}
        <div className="shadow-xl">
          <video
            width="1100"
            height="400"
            controls
            controlsList="nodownload"
            style={{ borderRadius: '7px', width: '1021px', height: '507px', objectFit: 'cover' }}
          >
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>
        </div>
        {/* video details */}
        <div className="bg-white my-1 shadow-md py-4 pl-4">
          <div className="text-[22px] font-medium">Complete Python Tutorial</div>
          <div className="ml-2 flex items-center justify-start gap-4">
            <span className="flex items-center gap-1">
              <Image src="/icons/calender.svg" alt="heart" width="12" height="12" />
              12/13
            </span>
            <span className="flex items-center gap-1">
              <Image src="/icons/heart.svg" alt="heart" width="12" height="12" />
              111
            </span>
          </div>
        </div>
        <div className="border border-[#C7C7C7] my-2"></div>
        <div className="text-[#242424] flex items-center gap-2 text-lg font-medium ml-2">
          <div className="bg-gray-500 w-8 h-8 rounded-full"></div>
          <div className="">Mr. Leo</div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
