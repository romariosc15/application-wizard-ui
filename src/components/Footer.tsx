import React from 'react';

const Footer = () => {
  return (
    <nav>
      <div className='flex flex-col lg:flex-row lg:justify-between py-5 lg:py-4 px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-36 text-base bg-slate-700 text-gray-50'>
        <h5 className='inline-block text-center lg:text-left'>2022. Desarrollado por Jaime Romario Sarmiento</h5>
        <div className="space-x-10 font-medium text-center lg:text-left mt-2 lg:mt-0">
          <a className="hover:opacity-90" href="https://github.com/romariosc15" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:opacity-90" href="https://www.linkedin.com/in/romariosarmiento/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;