import { useEffect, useRef, useState } from "react";

const useCoinData = () => {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const ws = useRef(null);
  const searchCache = useRef({});

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=11&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setFilteredCoins(data);
      });

    ws.current = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

    ws.current.onmessage = (event) => {
      const updates = JSON.parse(event.data);
      setCoins((prev) =>
        prev.map((coin) => {
          const ticker = updates.find(
            (u) => u.s.toLowerCase() === coin.symbol + "usdt"
          );
          if (ticker) {
            return {
              ...coin,
              current_price: parseFloat(ticker.c),
              price_change_percentage_24h: parseFloat(ticker.P),
            };
          }
          return coin;
        })
      );
    };

    return () => ws.current?.close();
  }, []);

  return { coins, filteredCoins, setFilteredCoins, searchCache };
};

export default useCoinData;
