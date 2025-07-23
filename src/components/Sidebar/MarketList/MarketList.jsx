import { useEffect, useState, useRef } from "react";
import { PriceBox } from "../../../sharedComponent/PriceBox/PriceBox";

const MarketList = () => {
  const [coins, setCoins] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=11&page=1&sparkline=false")
      .then(res => res.json())
      .then(setCoins);

    ws.current = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

    ws.current.onmessage = (event) => {
      const updates = JSON.parse(event.data);
      setCoins(prev =>
        prev.map(coin => {
          const ticker = updates.find(u => u.s.toLowerCase() === coin.symbol + "usdt");
          if (ticker) {
            return {
              ...coin,
              current_price: parseFloat(ticker.c),
              price_change_percentage_24h: parseFloat(ticker.P)
            };
          }
          return coin;
        })
      );
    };

    return () => ws.current.close();
  }, []);

  return (
    <div className="overflow-y-auto pr-1">
      {coins.map(coin => {
        const isPositive = coin.price_change_percentage_24h >= 0;
        return (
          <div key={coin.id} className="flex justify-between items-center py-2 text-sm border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <img src={coin.image} alt={coin.name} className="h-4 w-4" />
              <div>
                <div className="text-white font-medium uppercase">
                  {coin.symbol} • <span className="text-gray-400">USDT</span>
                </div>
                <div className="text-gray-400 text-xs">
                  {Math.abs(coin.current_price).toFixed(3)} USD
                </div>
              </div>
            </div>
            <PriceBox price={coin.price_change_percentage_24h} isPositive={isPositive} />
          </div>
        );
      })}
    </div>
  );
};

export default MarketList;
