import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import Watchlist from '../pages/watchlist';
import { Container } from 'react-bootstrap';

function Nav() {
	return (
		<nav className={navStyles.nav}>
			<div className="octo">
				<Link href="/" passHref>
					<a>
						<img src="/rocket1.png" alt="crypto-tracker-logo" />
					</a>
				</Link>
			</div>
			<div>
				<h1 style={navStyles.h1}>Crypto Tracker</h1>
			</div>

			<ul>
				{/* <li>
                   <Link href='/'>Home</Link> 
                </li> */}

				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/watchlist">Watchlist</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link href="/docs">Docs</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
