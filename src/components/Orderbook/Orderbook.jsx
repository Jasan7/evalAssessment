import { useEffect, useState, useRef } from "react";

const OrderBook = () => {
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@depth");

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.b) setBids(message.b.slice(0, 10)); // top 10 bids
      if (message.a) setAsks(message.a.slice(0, 10)); // top 10 asks
    };

    return () => {
      ws.current.close();
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-900 text-white rounded-md">
      <div>
        <h2 className="font-bold mb-2 text-red-400">Sell Orders (Asks)</h2>
        {asks.map(([price, qty], index) => (
          <div key={index} className="flex justify-between text-sm">
            <span className="text-red-400">${parseFloat(price).toFixed(2)}</span>
            <span>{parseFloat(qty).toFixed(4)}</span>
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-bold mb-2 text-green-400">Buy Orders (Bids)</h2>
        {bids.map(([price, qty], index) => (
          <div key={index} className="flex justify-between text-sm">
            <span className="text-green-400">${parseFloat(price).toFixed(2)}</span>
            <span>{parseFloat(qty).toFixed(4)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBook;
