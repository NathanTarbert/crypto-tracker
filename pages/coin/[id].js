import Layout from '../../components/SearchBar/Layout';
import styles from './Coin.module.css';
import { useRouter } from "next/router";

const Coin = ({ coin }) => {
    const router = useRouter();

  return (
    <Layout>
        <button style={{color: 'white', fontSize: '50px', borderBlockColor: 'red', backgroundColor: 'blue'}} type="button" onClick={() => router.push('/')}>
            Home
        </button>
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
            ${coin.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data
    }
  };
}