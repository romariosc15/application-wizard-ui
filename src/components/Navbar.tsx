import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='py-4 px-12 border-b'>
      <div className='flex flex-row justify-between'>
        <h5 className='text-lg font-bold'>Asistente de Postulación</h5>
        <div className='space-x-8'>
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