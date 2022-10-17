import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='py-4 px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-36'>
      <div className='flex flex-row justify-between items-center'>
        <Link href={'/'}>
          <a>
            <img src="/image/wizard/romario.png" className="w-16 lg:w-20"/>
          </a>
        </Link>
        <div className='space-x-10 hidden md:block text-sm lg:text-lg font-medium text-slate-800'>
          <Link href={'/'}>
            <a className="hover:opacity-80 transition-opacity duration-300">
              Inicio
            </a>
          </Link>
          <Link href={'/wizard'}>
            <a className="hover:opacity-80 transition-opacity duration-300">
              Formularios
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;