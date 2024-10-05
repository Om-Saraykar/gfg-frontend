import React from 'react';
import images from '../constants/images';

const AboutPyHack = () => {
  return (
    <section className="w-[90%] bg-white dark:bg-black flex flex-col gap-[3rem]">

      <div className='flex flex-col gap-4'>
        <h1 className="lg:text-[60px] md:text-[50px] sm:text-[40px] text-[35px] font-semibold text-gray-900">About PyHack</h1>
        <p className="lg:text-[32px] md:text-[26px] sm:text-[22px] text-[18px] font-medium text-[#636161]">
          PyHack is a dynamic, community-driven workshop designed to teach game development using Python.
        </p>
        <div className="flex flex-col justify-center">
          <div className="flex items-center group">
            <p className='text-black sm:text-[16px] text-[14px] transition-transform duration-300 transform group-hover:scale-105 hover:underline hover:cursor-pointer'>Learn More</p>
            <img src={images.blackRightArrow} alt="" className='h-[13px] ml-3 transition-transform duration-300 transform group-hover:translate-x-1' />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-8 justify-center items-center">     

        <div className='flex flex-col justify-between gap-8'>
          <div className="bg-[#fafafa] dark:bg-gray-600 rounded-lg shadow-sm flex flex-col justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
            <div className='p-4'>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mb-2 inline-block">101%</p>
              <p className="text-gray-500 dark:text-white mb-2">Boost in Python game dev skills</p>
            </div>
            <div className='overflow-hidden rounded-[20px] transition-transform duration-300 transform hover:scale-110'>
              <img src={images.greenRb} alt="" className='object-contain' />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-600 rounded-lg shadow-sm hidden md:inline-block transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={images.smile} alt="" />
          </div>

        </div>

        <div className="h-full shadow-sm rounded-[20px] transition-transform duration-300 hover:scale-105">
          <img src={images.greenSmile} alt="" className='' />
        </div>
        
      </div>
      
    </section>
  );
};

export default AboutPyHack;
