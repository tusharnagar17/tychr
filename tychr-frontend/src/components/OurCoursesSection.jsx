'use client';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import CourseModal from './CourseModal';

const customCourses = [
  {
    image: '/python.jpeg',
    courseName: 'Advance Python',
    teacherName: 'Mr. Leo',
    totalLectures: '8 Lectures',
    date: '10/24',
  },
  {
    image: '/python.jpeg',
    courseName: 'Advance Python',
    teacherName: 'Mr. Leo',
    totalLectures: '8 Lectures',
    date: '10/24',
  },
  {
    image: '/python.jpeg',
    courseName: 'Advance Python',
    teacherName: 'Mr. Leo',
    totalLectures: '8 Lectures',
    date: '10/24',
  },
  {
    image: '/python.jpeg',
    courseName: 'Advance Python',
    teacherName: 'Mr. Leo',
    totalLectures: '8 Lectures',
    date: '10/24',
  },
];

const OurCoursesSection = () => {
  return (
    <section className="my-6">
      <div className="font-semibold text-black font-roboto-serif text-[18px] my-2">
        Our Courses
      </div>
      <div className="flex flex-wrap gap-6">
        {customCourses.map((item, index) => (
          <CoursePreview key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

const CoursePreview = ({ item }) => {
  const { image, courseName, teacherName, totalLectures, date } = item;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#E8FFF7] p-2" onClick={() => setIsOpen((prev) => !prev)}>
      <Image src={image} width={196} height={104} alt={courseName} />
      <div className="flex justify-between items-center py-1">
        <div className="text-sm font-medium">{courseName}</div>
        <div className="text-[8px] text-[#242424] font-normal">{date}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold">{teacherName}</div>

        <div className="text-xs font-normal text-[#242424]">{totalLectures}</div>
      </div>
      {/* Modal for specific course */}
      {isOpen == true && <CourseModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default OurCoursesSection;
