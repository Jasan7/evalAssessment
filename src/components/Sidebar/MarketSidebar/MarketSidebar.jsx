import MarketList from "../MarketList/MarketList";
import MarketSearch from "../MarketSearch/MarketSearch";
import MarketTabs from "../MarketTabs/MarketTabs";

const MarketSidebar = () => {
  return (
    <div className="w-full sm:max-w-screen-md mx-auto bg-[#111827] text-white w-[230px] flex flex-col p-3 border-gray-700">
      <MarketTabs />
      <MarketSearch />
      <MarketList />
    </div>
  );
};

export default MarketSidebar;
