import React from 'react';

const Footer = () => {
  return (
    <nav>
      <div className='flex flex-col items-center lg:flex-row lg:justify-between py-5 px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-36 text-sm lg:text-base bg-main text-black'>
        <h5 className='inline-block text-center lg:text-left text-gray-600'>2022. Desarrollado por Jaime Romario Sarmiento</h5>
        <div className="space-x-8 font-medium text-center lg:text-left mt-3 lg:mt-0 flex flex-row">
          <a className="hover:opacity-90" href="https://github.com/romariosc15" target="_blank" rel="noopener noreferrer">
            <img src="/image/icons/github.png" className="w-6 h-6 lg:w-7 lg:h-7 hover:opacity-75 transition-opacity duration-300"/>
          </a>
          <a className="hover:opacity-90" href="https://www.linkedin.com/in/romariosarmiento/" target="_blank" rel="noopener noreferrer">
            <img src="/image/icons/linkedin_square.png" className="w-6 h-6 lg:w-7 lg:h-7 hover:opacity-75 transition-opacity duration-300"/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;