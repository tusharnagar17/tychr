import React from 'react';
import Image from 'next/image';
import LiveLectures from '@/components/LiveLectures';
import UpcomingLiveLectures from '@/components/UpcomingLiveLectures';

const LivePage = () => {
  const lectureDetail = {
    name: 'Lecture on IB Chemistry/Special Class',
    time: '04:00',
    duration: '02 hrs',
    educator: 'Mr. SK Pathak',
    description:
      'Lorem ipsum dolor sit amet consectetur. Egestas aenean condimentum vulputate eu ut fringilla accumsan. Sit massa nulla pharetra nisl cras lorem accumsan fusce. Vestibulum massa leo nisl risus aliquam sit libero. Eget elementum semper ipsum sed integer vitae dictum semper arcu.',
  };

  const upcomingLecturesData = {
    name: 'English Literature & Language',
    duration: '02 hours',
    educator: 'Mr. SK Pathak',
    date: '31/07',
    time: '04:00',
  };

  return (
    <div className="flex flex-col my-14 mx-10">
      {/* Current Live Lecture */}
      <div className=" ">
        <LiveLectures item={lectureDetail} />
      </div>
      {/* Upcomoing Live Lectures */}
      <div className="font-semibold text-base font-roboto-serif my-2">
        Upcoming Live Lectures/ Webinar
      </div>
      <div>
        <UpcomingLiveLectures item={upcomingLecturesData} />
      </div>
    </div>
  );
};

export default LivePage;
