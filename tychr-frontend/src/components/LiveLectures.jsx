'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const LiveLectures = ({ item }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/live/1');
  };
  return (
    <div
      className="cursor-pointer flex justify-between items-baselin p-4 rounded-lg bg-[#ECFBF6] w-[940px] h-[272px]"
      onClick={handleClick}
    >
      {/* Lecture details */}
      <div className="flex-1">
        <div className="font-roboto-serif text-base font-semibold">{item.name}</div>
        <div className="my-4">
          <div className="font-medium text-sm">Time: {item.time}</div>
          <div className="font-medium text-sm">Duration: {item.duration}</div>
          <div className="font-medium text-sm">Educator: {item.educator}</div>
        </div>
        <div className="font-normal text-xs my-2">{item.description}</div>
      </div>
      {/* Lecture Image */}
      <div className="flex-1  w-[319px] h-[224px] relative">
        <Image
          src="/live.jpeg"
          layout="fill"
          objectFit="cover"
          alt="live"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default LiveLectures;
