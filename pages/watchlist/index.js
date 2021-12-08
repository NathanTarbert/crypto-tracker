import Layout from "../../components/Layout";
import styles from './Watchlist.module.css';
import Link from 'next/link';
import Coin from "../coin/[id]";
import React from "react";
import { useState } from "react";


const Watchlist = ({ coins, favCoins, removeCoin }) => {

    //return an array containing current coin api data on only the favorited coins held in the favCoins array
    const filteredCoins = coins.filter(({ id: name1 }) => favCoins.some(({ id: name2 }) => name1 === name2));
    // console.log("filtered coins ", filteredCoins);

    const handleClick = (id) => {//this is calling a function from _App.js which is grabbing a coin by id to remove
        // console.log(id);
        removeCoin(id);
    };
    

    return (
             <div>
      <h1>All Coins</h1>

      {filteredCoins.map(coin => (
        
            <div className={styles.coin_container}>
            <div className={styles.coin_row}>
            <div className={styles.coin}>
                <img src={coin.image} alt={coin.id} className={styles.coin_img}/>
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
              <button onClick={() => handleClick(coin.id)}>Remove</button>
            </div>
            </div>
            </div>
      ))}
    </div>
  );
};

export default Watchlist;

export async function getServerSideProps() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false')// https://www.coingecko.com/en/api#explore-api (Coins/markets)

  const coins = await res.json()

  return {
    props: {
      coins,
    }
  }
}