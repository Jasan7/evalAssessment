import { useEffect, useRef, useState } from "react";

const useOrderBookData = () => {
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);
  const [loading, setLoading] = useState(true);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@depth");

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.b) setBids(message.b.slice(0, 10));
      if (message.a) setAsks(message.a.slice(0, 10));
    };

    return () => ws.current?.close();
  }, []);

  useEffect(() => {
    if (bids.length > 0 && asks.length > 0) {
      setLoading(false);
    }
  }, [bids, asks]);

  return { bids, asks, loading };
};

export default useOrderBookData;
