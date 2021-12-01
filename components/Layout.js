import Head from 'next/head';
import Link from 'next/link';
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
        <Link href='/' passHref>
          <a>
            <img src="/octo-logo.png" alt="crypto-tracker-logo" />
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
    </>
  );
};

export default Layout;