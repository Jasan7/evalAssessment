import { useEffect, useRef, useState } from "react";
import MarketList from "../MarketList/MarketList";
import MarketSearch from "../MarketSearch/MarketSearch";
import MarketTabs from "../MarketTabs/MarketTabs";

const MarketSidebar = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);
  const ws = useRef(null);
  const searchCache = useRef({}); // cache object
  const debounceTimer = useRef(null);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=11&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setFilteredCoins(data); // initialize
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

    return () => ws.current.close();
  }, []);

  // Debounced and cached search
  useEffect(() => {
    if (!coins.length) return;

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      const key = searchTerm.trim().toLowerCase();

      if (!key) {
        setFilteredCoins(coins);
        return;
      }

      if (searchCache.current[key]) {
        setFilteredCoins(searchCache.current[key]);
      } else {
        const filtered = coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(key) ||
            coin.symbol.toLowerCase().includes(key)
        );
        searchCache.current[key] = filtered;
        setFilteredCoins(filtered);
      }
    }, 300);

    return () => clearTimeout(debounceTimer.current);
  }, [searchTerm, coins]);

  return (
    <div className="w-full sm:max-w-screen-md mx-auto bg-[#111827] text-white w-[230px] flex flex-col p-3 border-gray-700">
      <MarketTabs />
      <MarketSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
      <MarketList coins={filteredCoins} />
    </div>
  );
};

export default MarketSidebar;
