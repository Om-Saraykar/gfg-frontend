/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      primary: '#4285F4',
      darkPrimary: '#BB86FC',
      secondary: '#0F9058',
      darkPrimary: '#BB86FC',

      fontColor: '#5F5F5F',
      darkFontColor: '#D0D0D0',

      bgColor: '#FFFFFF',
      darkBgColor: '#232323',

      googleGreen: '#0F9D58',
      googleYellow: '#F4B400',
      googleRed: '#DB4437',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    boxShadow: {
      'custom': '0px 4px 30px 0px #00000040',
      'custom-dark': '0px 4px 20px 0px #ffffff1a'

    },
    screens: {
      'xs': '480px',    // Extra small devices (phones, <600px)
      '2xl': '1440px',  // Custom 2xl breakpoint
      '3xl': '1600px',  // Custom 3xl breakpoint
      'mm': '1111px'
    },
  },
};
export const plugins = [];
