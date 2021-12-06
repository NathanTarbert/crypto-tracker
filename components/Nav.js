import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

function Nav() {
    return (
        <nav className={navStyles.nav}>
            <div className="octo">
                <Link href='/' passHref>
                    <a>
                        <img src='/rocket.png' alt="crypto-tracker-logo" />
                    </a>
                </Link>
            </div>
           <ul>
                {/* <li>
                   <Link href='/'>Home</Link> 
                </li> */}
                
                <li>
                   <Link href='/about'>About</Link> 
                </li> 
                 <li>
                   <Link href='/watchlist'>Watchlist</Link> 
                </li>
                
            </ul> 
            
        </nav>
    )
}   

export default Nav
