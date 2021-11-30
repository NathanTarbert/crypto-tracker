import Coins from './Coins';

export default function CoinList({ filteredCoins }) {
  return (
    <>
      {filteredCoins.map(coin => {// map through the API object we get returned and pull out what we need
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            lastUpdated={coin.last_updated}
          />
        );
      })}
    </>
  );
}