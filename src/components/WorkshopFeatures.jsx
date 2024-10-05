import React from 'react';
import images from '../constants/images';

const WorkshopFeatures = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h2 className="lg:text-[60px] md:text-[50px] sm:text-[40px] text-[35px] font-semibold">
        Workshop Features
      </h2>
      <div className="h-auto flex flex-col items-center justify-center py-12 lg:gap-6">
        
        {/* First row */}
        <div className="w-full flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-0 p-4 lg:p-0">
          <div className="h-[210px] w-[314px] sm:h-[312px] sm:w-[502px] lg:h-[273px] lg:w-[440px] xl:h-[312px] xl:w-[520px] bg-[#fafafa] dark:bg-[#2d2d2d] shadow-lg flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-5xl flex justify-end">
              <img src={images.redImage} alt="Image" className="h-[100px] sm:h-[150px] md:h-[150px] lg:h-[140px] xl:h-[170px]" />
            </div>
            <div className="flex flex-col items-start justify-end p-3">
              <h3 className="text-[22px] sm:mb-4 sm:text-[38px] md:text-[38px] leading-[2.3rem] md:leading-[2.8rem] text-[#121316] dark:text-[#f5f5f5]   font-semibold">
                Game Mechanics
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[16px] xl:text-[18px] text-[#636363] dark:text-[#e0e0e0]">
                Master physics, collision detection, AI, and game loops.
              </p>
            </div>
          </div>

          <div className="h-[210px] w-[314px] sm:h-[312px] sm:w-[502px] lg:h-[273px] lg:w-[440px] xl:h-[312px] xl:w-[520px] bg-[#fafafa] dark:bg-[#2d2d2d] shadow-lg flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-5xl flex justify-end">
              <img src={images.blueImage} alt="Image" className="h-[100px] sm:h-[150px] md:h-[150px] lg:h-[140px] xl:h-[170px]" />
            </div>
            <div className="flex flex-col items-start justify-end p-3">
              <h3 className="text-[22px] sm:mb-4 sm:text-[38px] md:text-[38px] leading-[2.3rem] md:leading-[2.8rem] text-[#121316] dark:text-[#f5f5f5]   font-semibold">
                Visual Effects
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[16px] xl:text-[18px] text-[#636363] dark:text-[#e0e0e0]">
                Create 2D/3D graphics and animations.
              </p>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="w-full flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-0 p-4 lg:p-0">
          <div className="h-[210px] w-[314px] sm:h-[312px] sm:w-[502px] lg:h-[273px] lg:w-[440px] xl:h-[312px] xl:w-[520px] bg-[#fafafa] dark:bg-[#2d2d2d] shadow-lg flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-5xl flex justify-end">
              <img src={images.yellowImage} alt="Image" className="h-[100px] sm:h-[150px] md:h-[150px] lg:h-[140px] xl:h-[170px]" />
            </div>
            <div className="flex flex-col items-start justify-end p-3">
              <h3 className="text-[22px] sm:mb-4 sm:text-[38px] md:text-[38px] leading-[2.3rem] md:leading-[2.8rem] text-[#121316] dark:text-[#f5f5f5]   font-semibold">
                Game Balancing
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[16px] xl:text-[18px] text-[#636363] dark:text-[#e0e0e0]">
                Balance difficulty and progression.
              </p>
            </div>
          </div>

          <div className="h-[210px] w-[314px] sm:h-[312px] sm:w-[502px] lg:h-[273px] lg:w-[440px] xl:h-[312px] xl:w-[520px] bg-[#fafafa] dark:bg-[#2d2d2d] shadow-lg flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-5xl flex justify-end">
              <img src={images.purpleImage} alt="Image" className="h-[100px] sm:h-[150px] md:h-[150px] lg:h-[140px] xl:h-[170px]" />
            </div>
            <div className="flex flex-col items-start justify-end p-3">
              <h3 className="text-[22px] sm:mb-4 sm:text-[38px] md:text-[38px] leading-[2.3rem] md:leading-[2.8rem] text-[#121316] dark:text-[#f5f5f5]   font-semibold">
                Cross-Platform Dev
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[16px] xl:text-[18px] text-[#636363] dark:text-[#e0e0e0]">
                Deploy games on PC, web, and mobile.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkshopFeatures;
