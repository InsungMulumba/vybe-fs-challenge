import { useState, useEffect } from "react";
import get from "axios";

import MarketCap from "./charts/marketCap";
import WalletBalance from "./charts/walletBalance";
import TransactionsPerSecond from "./charts/transactionsPerSecond";

import "./App.scss";

function App() {
  const [marketCapData, setMarketCapData] = useState([]);
  const [walletBalanceData, setWalletBalanceData] = useState([]);
  const [tpsData, setTPSData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (
      marketCapData?.length > 0 &&
      walletBalanceData?.length > 0 &&
      tpsData?.length > 0
    ) {
      setLoading(false);
    }
  }, [marketCapData, tpsData, walletBalanceData]);

  function fetchData() {
    try {
      get(`/api/marketCap`).then((response) => setMarketCapData(response.data));

      get(`/api/wallets`).then((response) =>
        setWalletBalanceData(response.data)
      );

      get(`/api/tps`).then((response) => setTPSData(response.data));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="container">
      {!loading && (
        <>
          <h1 test-id="title">VYBE FS CHALLENGE</h1>
          <MarketCap data={marketCapData} />

          <WalletBalance data={walletBalanceData} />

          <TransactionsPerSecond data={tpsData} />
        </>
      )}
    </div>
  );
}

export default App;
