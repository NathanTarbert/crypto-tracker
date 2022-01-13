import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Link from 'next/link';
import styles from './Coin.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { addCoin } from '../index';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from 'tailwindcss/stubs/defaultConfig.stub';

//destructure function/prop addCoin from index page
const Coin = ({ coin, addCoin }) => {
  // console.log("coin", coin)
	const router = useRouter();

	const [ isWatch, setWatch ] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
	// const [coinId, setCoinId] = useState(null);

	const addToWatch = () => {
		setWatch(true);
		addCoin({ id: coin.id });
		const notify = () => toast('Congratulations');
		console.log('id page: ', coin);
	};  

	//resets add to fav button, adds coin to array, sends user back to list page
	// const handleClose = () => {
	//   setWatch(false);
	//   router.push("/");
	// };

	return (
		<div className={styles.coin_page}>
			<div className={styles.coin_container}>
				<button className={styles.back_button}>
					<Link href="/">Back</Link>
				</button>
				<img src={coin.image.large} alt={coin.name} className={styles.coin_image} />
				<h1 className={styles.coin_name}>{coin.name}</h1>
				<p className={styles.coin_ticker}>{coin.symbol.toUpperCase()}</p>

				{/* {coin.market_data.current_price.usd < 0 ? ( */}
				<p className={styles.coin_current}>${coin.market_data.current_price.usd}</p>
				{/* // ) : (
          //    <p className={styles.coin_current}>
          //     ${coin.market_data.current_price.usd.toFixed(2)}
          //   </p>
          // )} */}

				{coin.market_data.price_change_24h < 0 ? (
					<p className={(styles.coin_price_change_24h, styles.red)}>
						$ {coin.market_data.price_change_24h.toFixed(2)}
					</p>
				) : (
					<p className={(styles.coin_price_change_24h, styles.green)}>
						$ {coin.market_data.price_change_24h.toFixed(2)}
					</p>
				)}

				{/* <p className={styles.coin_price_change_24h}>
            {coin.market_data.price_change_24h.toFixed(3)} %
          </p> */}
				<p className={styles.coin_high_24h}>24hr High $ {coin.market_data.high_24h.usd.toFixed(2)}</p>
				<p className={styles.coin_low_24h}>24hr Low $ {coin.market_data.low_24h.usd.toFixed(2)}</p>
				{/* {show or hide buttons according to setting coin to watchlist} */}
				{!isWatch && (
					//if isWatch is false, then then show button to add (default)
					<div>
						<button className={styles.coin_button} type="button" onClick={addToWatch}>
							Add to Watchlist
						</button>
            {/* <>
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Coin Description
              </Button>

              <ModalPopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </> */}
					</div>
				)}
				{isWatch && (
					//if isWatch is true, then text is displayed
					<div>
						<p>{coin.name} has been added to your Watchlist!</p>

						{/* <button className={styles.coin_button2} type="button" onClick={handleClose}>
            Home
            </button> */}
					</div>
				)}
			</div>
		</div>
	);
};

export default Coin;

export async function getServerSideProps(context) {
	const { id } = context.query;

	const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`); //https://www.coingecko.com/en/api#explore-api (/coins/{id})

	const data = await res.json();

	return {
		props: {
			coin: data
		}
	};
}
