import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='py-5 px-6 px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-36'>
      <div className='flex flex-row justify-between items-center'>
        <h5 className='text-base xl:text-xl font-bold text-slate-800'>Asistente de Postulación</h5>
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