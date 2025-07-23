import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const CandlestickChart = () => {
  const chartContainerRef = useRef();
  const candleSeriesRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 600,
      layout: {
        background: { color: "#1e1e2f" }, // gray/dark theme
        textColor: "#0a0a0aff", // white text
      },
      grid: {
        vertLines: { color: "#eee" },
        horzLines: { color: "#eee" },
      },
      timeScale: { timeVisible: true, secondsVisible: true },
    });

    const candleSeries = chart.addCandlestickSeries();
    candleSeriesRef.current = candleSeries;

    // STEP 1: Fetch historical data
    fetch(
      "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=100"
    )
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((d) => ({
          time: d[0] / 1000, // convert to seconds
          open: parseFloat(d[1]),
          high: parseFloat(d[2]),
          low: parseFloat(d[3]),
          close: parseFloat(d[4]),
        }));
        candleSeries.setData(formattedData);
      });

    // STEP 2: Subscribe to live updates
    const ws = new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@kline_1m"
    );

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const k = message.k;

      const bar = {
        time: Math.floor(k.t / 1000), // convert to seconds
        open: parseFloat(k.o),
        high: parseFloat(k.h),
        low: parseFloat(k.l),
        close: parseFloat(k.c),
      };

      candleSeries.update(bar);
    };

    return () => {
      ws.close();
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef} />;
};

export default CandlestickChart;
