import React, { } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children?: React.ReactNode,
  navigation: Boolean
};

const Layout = ({ children, navigation }: LayoutProps) => (
  <>
    {navigation && <Navbar /> }
      <div>
        {children}
      </div>
    {navigation && <Footer /> }
  </>
);

export default Layout;