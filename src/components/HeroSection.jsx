import React from "react";
import images from "../constants/images";

const HeroSection = () => {
  return (
    <div className={`w-full flex flex-col items-center py-[50px]`}>

      <div className="flex justify-start w-full lg:w-[90%] sm:absolute">
        <div className="w-full  md:w-[880px] p-4 flex flex-col items-start justify-center bg-white gap-[36px]">
          <div className="bg-[#f0f0f0] rounded-full py-[10px] px-[20px] flex items-center gap-[20px] w-full sm:w-auto">
            <div className="overflow-hidden">
              <p className="text-[16px] marquee sm:hidden z-10">
                Introducing an era of new and exciting game development
              </p>
              <p className="text-[16px] hidden sm:inline">
                Introducing an era of new and exciting game development
              </p>
            </div>
            <img src={images.dot} alt="" className="h-[6px] w-[6px]" />
            <a href="#" className="text-[#616161] font-bold hidden md:inline-block">Read more</a>
            <img src={images.rightArrow} alt="" className="h-[12px] w-[18px]" />
          </div>

          <p className="text-[35px] sm:text-[45px] md:text-[55px] lg:text-[60px] leading-[1] font-semibold text-black">
            Access the full power of Python Game Development.
          </p>

          <p className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#636161]">
            The ultimate game dev workshop for Python enthusiasts. Learn, create, and innovate with the most versatile pl.
          </p>

          <button className="z-20 flex items-center gap-[16px] bg-white rounded-full px-6 py-1 border-[1px] border-[#dddddd]">
            <p className="text-black text-[18px] sm:text-[20px] lg:text-[26px]">Get Started</p>
            <img src={images.rightArrow} alt="" className="h-[12px] w-[18px]" />
          </button>
        </div>
      </div>

      <img
        src={images.heroImg}
        alt="Python Game Development"
        className="w-[90%] object-contain sm:mt-[350px] md:mt-[400px] lg:mt-[370px] xl:mt-[350px] 2xl:mt-[300px] z-10"
      />
    </div>
  );
};

export default HeroSection;
