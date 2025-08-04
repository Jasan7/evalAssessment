import { useEffect, useRef, useState } from "react";

const useTradePrice = () => {
  const [lastPrice, setLastPrice] = useState(null);
  const [priceColor, setPriceColor] = useState("neutral");
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const newPrice = parseFloat(data.p).toFixed(2);

      setLastPrice((prevPrice) => {
        if (prevPrice !== null) {
          if (newPrice > prevPrice) {
            setPriceColor("up");
          } else if (newPrice < prevPrice) {
            setPriceColor("down");
          } else {
            setPriceColor("neutral");
          }
        }
        return newPrice;
      });
    };

    return () => ws.current?.close();
  }, []);

  return { lastPrice, priceColor };
};

export default useTradePrice;
