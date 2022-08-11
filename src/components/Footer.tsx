import React from 'react';

const Footer = () => {
  return (
    <nav>
      <div className='text-center pb-3 pt-3 border-t text-sm'>
        <h5 className='inline-block mb-1'>2022, Desarrollado por Jaime Romario Sarmiento</h5>
        <div className='space-x-2'>
          <a href="https://github.com/romariosc15" target="_blank" rel="noopener noreferrer">GitHub</a> -
          <a href="https://www.linkedin.com/in/romariosarmiento/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;