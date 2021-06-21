import CoinList from '../components/CoinList';
import Coins from '../components/Coins';
import SearchBar from '../components/SearchBar';


function Home({ filteredCoins }) {
  console.log(filteredCoins);
  return (
    <div>
      {/* <SearchBar type="text" placeholder="Search"/> */}
      <Coins />
      <CoinList filteredCoins={ filteredCoins }/>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins,
    }
  }
}

export default Home