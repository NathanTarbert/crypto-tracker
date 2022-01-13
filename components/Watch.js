import React from "react";
import { useState } from 'react';
import styles from '../pages/watchlist/Watchlist.module.css';

function Watch( coins, favCoins, removeCoin ) {
    
    const filteredCoins = coins.filter(({ id: name1 }) => favCoins.some(({ id: name2 }) => name1 === name2));//filter through the array so we can delete

    return (    
        <div>
            {
                !coins ? <h1>Your watchlist is empty</h1> :
        <div>
            <h1 className={styles.h1}>Welcome to your watchlist</h1><br></br><br></br>

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
    }
        </div>
    )
}

export default Watch
