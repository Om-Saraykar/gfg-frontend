import React from 'react';
import images from '../constants/images';

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F6] dark:bg-[#2d2d2d] py-10 w-full mt-[200px]">
      <div className="max-w-[90%] mx-auto flex lg:flex-row flex-col gap-7 justify-between">

        <div className='min-h-[420px] flex flex-col gap-8 justify-between'>

          <div className="text-center md:text-left flex items-center lg:justify-start justify-center gap-5">
            <img src={images.gfgGrayLogo} alt="GFGXPyHack Logo" className="h-[40px] mb-4" />
            <img src={images.gfgFont} alt="" className="max-w-[250px] mb-4" />
          </div>
          <p className="text-[#636363] dark:text-[#8f8e8e] sm:text-[16px] text-[14px] lg:max-w-md lg:text-left text-center">
            PyHack provides a wide range of resources and hands-on experience to help you master Python-based game development. Explore new techniques, share your creations, and collaborate with fellow developers. Whether you're looking to build indie games or start a career in the gaming industry, PyHack is the place to begin.
          </p>
          <div className="flex lg:hidden sm:flex-row flex-col justify-around gap-10 flex-wrap">
            <div className="text-center md:text-left">
              <h5 className="font-medium lg:text-[18px] text-[16px]">Resources</h5>
              <ul className="mt-4 space-y-2 text-[#8f8e8e] lg:text-[16px] text-[14px]">
                <li><a href="#" className=''>Brand</a></li>
                <li><a href="#" className=''>FAQ</a></li>
                <li><a href="#" className=''>Help & Support</a></li>
                <li><a href="#" className=''>Governance</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-medium lg:text-[18px] text-[16px]">Developers</h5>
              <ul className="mt-4 space-y-2 text-[#8f8e8e] lg:text-[16px] text-[14px]">
                <li><a href="#">Technical Paper</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Game Design</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-medium lg:text-[18px] text-[16px]">Company</h5>
              <ul className="mt-4 space-y-2 text-[#8f8e8e] lg:text-[16px] text-[14px]">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="text-gray-500 flex lg:justify-start justify-center space-x-4">
            {/* Social icons */}
            <a href="#"><img src={images.instaIcon} alt="Instagram" className="h-6" /></a>
            <a href="#"><img src={images.twitterIcon} alt="Twitter/X" className="h-6" /></a>
            <a href="#"><img src={images.discordIcon} alt="Discord" className="h-6" /></a>
            <a href="#"><img src={images.githubIcon} alt="GitHub" className="h-6" /></a>
          </div>


        </div>
        <div className="hidden lg:grid grid-cols-3 gap-10">
          <div className="text-center md:text-left">
            <h5 className="font-medium text-[18px]">Resources</h5>
            <ul className="mt-4 space-y-2 text-[#8f8e8e] tex-[16px]">
              <li><a href="#">Brand</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Governance</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-medium text-[18px]">Developers</h5>
            <ul className="mt-4 space-y-2 text-[#8f8e8e] tex-[16px]">
              <li><a href="#">Technical Paper</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Game Design</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-medium text-[18px]">Company</h5>
            <ul className="mt-4 space-y-2 text-[#8f8e8e] tex-[16px]">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
