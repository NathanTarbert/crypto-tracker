import {useState} from 'react';
import CoinList from '../components/CoinList';
import Coins from '../components/Coins';
import SearchBar from '../components/SearchBar';
import Head from 'next/head';
import Layout from '../components/Layout';

  export default function Home({ filteredCoins }) {
    const [search, setSearch] = useState('');
  
    const allCoins = filteredCoins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

  const handleChange = e => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className='coin_app'>
        <SearchBar type='text' placeholder='Search' onChange={handleChange} />
        <CoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false')// https://www.coingecko.com/en/api#explore-api (Coins/markets)

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins,
    }
  }
}