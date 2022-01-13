import { React, useState } from 'react';
import Layout from '../../components/Layout';
import styles from './Watchlist.module.css';
import Link from 'next/link';
import Coin from '../coin/[id]';

const Watchlist = ({ coins, favCoins, removeCoin }) => {
	const [ loadingState, setLoadingState ] = useState(false);

	//return an array containing current coin api data on only the favorited coins held in the favCoins array
	const filteredCoins = coins.filter(({ id: name1 }) => favCoins.some(({ id: name2 }) => name1 === name2));
	// console.log("filtered coins ", filteredCoins);
	// console.log("fav coins ", favCoins);

	const handleClick = (id) => {
		//this is calling a function from _App.js which is grabbing a coin by id to remove
		// console.log(id);
		removeCoin(id);
	};

	return (
		<div>
			<br />

			{loadingState === false && !favCoins.length ? (
				<h1>No items in watchlist</h1>
			) : (
				<h1>Welcome to your watchlist</h1>
			)}
			<br />

			{filteredCoins.map((coin) => (
				<div className={styles.coin_container}>
					<div className={styles.coin_row}>
						<div className={styles.coin} key={coin.id}>
							<img src={coin.image} alt={coin.id} className={styles.coin_img} />
							<h1 className={styles.coin_h1}>{coin.name}</h1>
							<p className={styles.coin_price}>${coin.current_price}</p>
							{coin.price_change_percentage_24h.toFixed(2) < 0 ? (
								<p className={(styles.coin_percent, styles.red)}>
									{coin.price_change_percentage_24h.toFixed(2)}%
								</p>
							) : (
								<p className={(styles.coin_percent, styles.green)}>
									{coin.price_change_percentage_24h.toFixed(2)}%
								</p>
							)}
							<p>Last 24hrs</p>
							{coin.price_change_24h < 0 ? (
								<p className={(styles.coin_price_change_24h, styles.red)}>
									Down ${coin.price_change_24h.toFixed(2)}
								</p>
							) : (
								<p className={(styles.coin_price_change_24h, styles.green)}>
									Up ${coin.price_change_24h.toFixed(2)}
								</p>
							)}
							<p className={(styles.coin_high_24h, styles.green)}>
								24hr High ${coin.high_24h.toFixed(2)}
							</p>
							<p className={(styles.coin_low_24h, styles.red)}>24hr Low ${coin.low_24h.toFixed(2)}</p>
						</div>
					</div>
					<button className={styles.remove_button} onClick={() => handleClick(coin.id)}>
						Remove
					</button>
				</div>
			))}
		</div>
	);
};

export default Watchlist;

export async function getServerSideProps() {
	const res = await fetch(
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false'
	); // https://www.coingecko.com/en/api#explore-api (Coins/markets)

	const coins = await res.json();

	return {
		props: {
			coins
		}
	};
}
