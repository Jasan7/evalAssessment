const MarketSearch = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search Coins"
      className="w-full bg-[#1f2937] text-white px-3 py-2 text-sm rounded mb-4 placeholder-gray-400 outline-none"
    />
  );
};

export default MarketSearch;
