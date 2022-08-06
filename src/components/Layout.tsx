import React, { } from 'react'

import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <div>
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;