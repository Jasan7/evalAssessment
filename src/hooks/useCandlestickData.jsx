import { useEffect } from "react";

const useCandleStickData = (symbol = "BTCUSDT", interval = "1m", candleSeriesRef) => {
  useEffect(() => {
    // Fetch historical candles
    fetch(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=100`
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((d) => ({
          time: d[0] / 1000,
          open: parseFloat(d[1]),
          high: parseFloat(d[2]),
          low: parseFloat(d[3]),
          close: parseFloat(d[4]),
        }));
        candleSeriesRef.current.setData(formattedData);
      });

    // WebSocket for live updates
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`
    );

    ws.onmessage = (event) => {
      const { k } = JSON.parse(event.data);
      const liveBar = {
        time: Math.floor(k.t / 1000),
        open: parseFloat(k.o),
        high: parseFloat(k.h),
        low: parseFloat(k.l),
        close: parseFloat(k.c),
      };
      candleSeriesRef.current.update(liveBar);
    };

    return () => {
      ws.close();
    };
  }, [symbol, interval, candleSeriesRef]);
};

export default useCandleStickData;
