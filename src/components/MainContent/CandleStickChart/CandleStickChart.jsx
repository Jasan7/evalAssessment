import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import useCandleStickData from "../../../hooks/useCandleStickData";

const CandlestickChart = () => {
  const chartContainerRef = useRef();
  const candleSeriesRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 600,
      layout: { textColor: "#0a0a0aff" },
      grid: {
        vertLines: { color: "#eee" },
        horzLines: { color: "#eee" },
      },
      timeScale: { timeVisible: true, secondsVisible: true },
    });

    const candleSeries = chart.addCandlestickSeries();
    candleSeriesRef.current = candleSeries;

    return () => chart.remove();
  }, []);

  // hook for historical + live data
  useCandleStickData("BTCUSDT", "1m", candleSeriesRef);

  return <div ref={chartContainerRef} className="w-full h-[600px]" />;
};

export default CandlestickChart;
