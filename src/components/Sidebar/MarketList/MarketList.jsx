import { PriceBox } from "../../../sharedComponent/PriceBox/PriceBox";

const MarketList = ({ coins }) => {
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
