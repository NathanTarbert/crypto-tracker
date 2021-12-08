import Layout from '../../components/Layout';
import styles from './Coin.module.css';
import { useRouter } from "next/router";
import React from 'react';
import { useState } from 'react';
import { addCoin } from '../index';

//destructure function/prop addCoin from index page
const Coin = ({ coin, favCoin, addCoin }) => {
    const router = useRouter();
    console.log(favCoin);

    const [isWatch, setWatch] = useState(false);
    // const [coinId, setCoinId] = useState(null);

    // const handleClick = (coin) => {
    //   console.log(coin);
    //   setWatch(true);
    // };

    //resets add to fav button, adds coin to array, sends user back to list page
    const handleClose = () => {
      setWatch(false);
      addCoin({id: coin.id});
      router.push("/");
    };

  return (

      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img
            src={coin.image.large}
            alt={coin.name}
            className={styles.coin_image}
          />
          <h1 className={styles.coin_name}>{coin.name}</h1>
          <p className={styles.coin_ticker}>{coin.symbol.toUpperCase()}</p>
          <p className={styles.coin_current}>
            ${coin.market_data.current_price.usd.toFixed(2)}
          </p>

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
          <p className={styles.coin_high_24h}>
              24hr High $ {coin.market_data.high_24h.usd.toFixed(2)}
          </p>
          <p className={styles.coin_low_24h}>
              24hr Low $ {coin.market_data.low_24h.usd.toFixed(2)}
          </p>
           {/* {show or hide buttons according to setting coin to watchlist} */}
           {!isWatch && (
              //if isWatch is false, then then show button to add (default)
           <div>             
           <button className={styles.coin_button} type="button" onClick={() => setWatch(true)}>
           Add to Watchlist
          </button>
          </div>)}
          {isWatch && (
            //if isWatch is true, then text is displayed
           <div>
           <p>{coin.name} has been added to your Watchlist!</p>
           <button className={styles.coin_button2} type="button" onClick={handleClose}>
           Home
          </button>
          </div>)}
        </div>
      </div>  
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);//https://www.coingecko.com/en/api#explore-api (/coins/{id})

  const data = await res.json();

  return {
    props: {
      coin: data
    }
  };
}