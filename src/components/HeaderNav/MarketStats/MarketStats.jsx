import useMarketStats from "../../../hooks/useMarketStats";

const MarketStats = () => {
  const stats = useMarketStats("BTCUSDT", 10000);

  if (!stats) return null;

  const change = parseFloat(stats.priceChangePercent).toFixed(2);
  const isPositive = change >= 0;

  return (
    <div className="w-full bg-[#1e2130] text-white py-1 px-1 border-b border-gray-700 text-sm">
      <div className="flex overflow-x-auto whitespace-nowrap gap-6">
        <div className="flex items-center bg-[#2b2c3d] rounded-md px-2 py-1 min-w-max w-55">
          <i className="fas fa-circle-user text-sm text-white mr-4 ml-4" />
          <div>
            <div className="text-gray-400 text-[10px] font-medium">Monero</div>
            <div className="text-white text-[11px] font-semibold">
              XMR<span className="text-gray-400 mx-1">•</span>BTC
            </div>
          </div>
        </div>

        <div className="min-w-max">
          <span className="block text-gray-400">Last Price:</span>
          <span className="block">
            {parseFloat(stats.lastPrice).toFixed(2)} USDT
          </span>
        </div>
        <div className="min-w-max">
          <span className="block text-gray-400">24h Change:</span>
          <span className={`block ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {isPositive ? "+" : ""}
            {change}%
          </span>
        </div>
        <div className="min-w-max">
          <span className="block text-gray-400">24h High:</span>
          <span className="block">{parseFloat(stats.highPrice).toFixed(2)}</span>
        </div>
        <div className="min-w-max">
          <span className="block text-gray-400">24h Low:</span>
          <span className="block">{parseFloat(stats.lowPrice).toFixed(2)}</span>
        </div>
        <div className="min-w-max">
          <span className="block text-gray-400">24h Volume:</span>
          <span className="block">{parseFloat(stats.volume).toFixed(2)}</span>
        </div>
        <div className="min-w-max">
          <span className="block text-gray-400">Wallet</span>
          <span className="block">•</span>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;
