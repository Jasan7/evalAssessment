import useOrderBookData from "../../hooks/useOrderBookData.jsx";
import useTradePrice from "../../hooks/useTrardePrice.jsx";
import { Order } from "../../sharedComponent/Order/Order";
import { useState } from "react";

const TABS = ["All", "Bids", "Asks"];

const OrderBook = () => {
  const { bids, asks, loading } = useOrderBookData();
  const { lastPrice, priceColor } = useTradePrice();
  const [activeTab, setActiveTab] = useState("All");

  const renderOrders = () => {
    switch (activeTab) {
      case "Bids":
        return <Order title="Buy Orders (Bids)" orders={bids} color="green" />;
      case "Asks":
        return <Order title="Sell Orders (Asks)" orders={asks} color="red" />;
      case "All":
      default:
        return (
          <>
            <Order title="Sell Orders (Asks)" orders={asks} color="red" />
            {lastPrice && (
              <div
                className={`mx-auto my-2 w-65 h-10 flex items-center justify-center rounded-md font-semibold text-sm text-white ${
                  priceColor === "up"
                    ? "bg-green-800"
                    : priceColor === "down"
                    ? "bg-red-800"
                    : "bg-gray-600"
                }`}
              >
                ${lastPrice}
              </div>
            )}
            <Order title="Buy Orders (Bids)" orders={bids} color="green" />
          </>
        );
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
      <div className="flex mb-4 space-x-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded font-medium ${
              activeTab === tab
                ? "bg-gray text-white border"
                : "bg-black-700 hover:bg-gray-600"
            } ${
              tab === "Bids"
                ? "text-green-400"
                : tab === "Asks"
                ? "text-red-400"
                : null
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white border-opacity-40"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">{renderOrders()}</div>
      )}

      <div className="flex flex-col gap-2 mt-6">
        <button className="py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold">
          Buy XMR
        </button>
        <button className="py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold">
          Sell XMR
        </button>
      </div>
    </div>
  );
};

export default OrderBook;
