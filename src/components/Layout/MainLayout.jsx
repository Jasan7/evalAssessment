import HeaderNav from "../HeaderNav/HeaderNav";
import OrderBook from "../Orderbook/Orderbook";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-[#0d0f1b] text-white">
      <HeaderNav />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto">{children}</div>
        <div className="w-[350px] border-l border-gray-700 overflow-auto">
          <OrderBook />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
