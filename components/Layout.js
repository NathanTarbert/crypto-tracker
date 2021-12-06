import Head from 'next/head';
import Nav from './Nav';


const Layout = ({ children, title = 'Crypto Tracker' }) => {
  return (
    <>
    <Nav />
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='header'>       
      </header>
      <main>{children}</main>
    </div>
    </>
  );
};

export default Layout;