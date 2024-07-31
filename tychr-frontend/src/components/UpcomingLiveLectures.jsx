'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const UpcomingLiveLectures = ({ item }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/live/1');
  };
  return (
    <div className="flex mx-1 cursor-pointer items-center gap-4" onClick={handleClick}>
      <div className="w-[153px] h-[106px] relative">
        <Image
          src="/live.jpeg"
          layout="fill"
          objectFit="cover"
          alt="live"
          className="rounded-xl"
        />
      </div>
      <div className="">
        <div className="font-roboto-serif font-semibold text-base">{item.name}</div>
        <div className="my-1 flex justify-between">
          <div className="font-medium text-sm">Duration: {item.duration}</div>
          <div className="font-medium text-sm">Date: {item.date}</div>
        </div>
        <div className="my-1">
          <div className="font-medium text-sm">Educator: {item.educator}</div>
          <div className="font-medium text-sm">Time: {item.time}</div>
        </div>
        <div className="text-xs font-medium">Download Notes PDF</div>
      </div>
    </div>
  );
};

export default UpcomingLiveLectures;
