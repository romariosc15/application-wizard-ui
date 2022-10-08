import React from 'react';

const Footer = () => {
  return (
    <nav>
      <div className='flex flex-row justify-between pb-4 pt-4 px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-36 text-base bg-slate-700 text-gray-50'>
        <h5 className='inline-block'>2022. Desarrollado por Jaime Romario Sarmiento</h5>
        <div className="space-x-10 font-medium">
          <a href="https://github.com/romariosc15" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/romariosarmiento/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;