import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled.div``;

export default Layout;
