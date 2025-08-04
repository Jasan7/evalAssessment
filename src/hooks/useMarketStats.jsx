import { useEffect, useState } from "react";

const useMarketStats = (symbol = "BTCUSDT", interval = 10000) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`
        );
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Failed to fetch market stats:", err);
      }
    };

    fetchStats();
    const timer = setInterval(fetchStats, interval);
    return () => clearInterval(timer);
  }, [symbol, interval]);

  return stats;
};

export default useMarketStats;
