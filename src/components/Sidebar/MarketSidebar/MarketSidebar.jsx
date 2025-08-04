import { useState } from "react";
import MarketList from "../MarketList/MarketList";
import MarketSearch from "../MarketSearch/MarketSearch";
import MarketTabs from "../MarketTabs/MarketTabs";
import useCoinData from "../../../hooks/useCoinsData.jsx";
import useDebouncedSearch from "../../../hooks/useDebouncedSearch.jsx";

const MarketSidebar = () => {
  const {
    coins,
    filteredCoins,
    setFilteredCoins,
    searchCache
  } = useCoinData();

  const [searchTerm, setSearchTerm] = useState("");

  useDebouncedSearch(searchTerm, coins, setFilteredCoins, searchCache);

  return (
    <div className="w-full sm:max-w-screen-md mx-auto bg-[#111827] text-white w-[230px] flex flex-col p-3 border-gray-700">
      <MarketTabs />
      <MarketSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
      <MarketList coins={filteredCoins} />
    </div>
  );
};

export default MarketSidebar;
