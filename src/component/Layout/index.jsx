import React from 'react';
import Footer from './Footer';
import Head from './Head';
import Header from './Header';

function Layout({ children, title, className }) {
  return (
    <>
      <Head title={title} />
      <Header />
      <main className={`main ${className}`}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
