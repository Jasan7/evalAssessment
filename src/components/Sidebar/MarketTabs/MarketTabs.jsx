const tabs = ["ALL", "INR", "BTC", "MORE"];

const MarketTabs = () => {
  return (
    <div className="flex justify-between mb-3 text-sm font-medium text-gray-400">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="hover:text-white px-2 py-1 rounded focus:outline-none w-full text-center"
        >
          {tab}
        </button>
      ))}
      
      <button className="hover:text-white px-2 py-1 rounded focus:outline-none w-full text-center">
        <i className="fas fa-share-from-square text-sm"></i>
      </button>
    </div>
  );
};

export default MarketTabs;
