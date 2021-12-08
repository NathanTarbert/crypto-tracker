import Layout from '../components/Layout';
import '../styles/globals.css';
import { useState } from 'react';


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp;

const CustomApp = ({ Component, pageProps }) => {

    //pass in the custom props we want available in all components/pages
  //empty fav coins state array
  const [favCoins, setFavCoins] = useState([]);

  //add coin from id page to favCoins array
  const addCoin = (coin) => setFavCoins((currentCoins) => {
    return [...currentCoins, coin];
  });

  const removeCoin = (id) => {
    setFavCoins((currentCoins) => {
      return currentCoins.filter((coin) => {
        return id !== coin.id;
      });
    });
  };

  return (
    <Layout>
      <Component
        {...pageProps}
        favCoins={favCoins}
        addCoin={addCoin}
        removeCoin={removeCoin}
      />
    </Layout>
  );
};

export default CustomApp;

