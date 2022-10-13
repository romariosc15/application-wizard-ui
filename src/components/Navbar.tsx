import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='py-4 lg:py-5 px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-36'>
      <div className='flex flex-row justify-between items-center'>
        <Link href={'/'}>
          <a>
            <img src="/image/wizard/romario.png" className="w-16"/>
          </a>
        </Link>
        <div className='space-x-10 hidden md:block text-sm xl:text-base font-medium text-slate-800'>
          <Link href={'/'}>
            Inicio
          </Link>
          <Link href={'/wizard'}>
            Formularios
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;