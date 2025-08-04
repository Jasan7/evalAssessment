import HeaderNav from "../HeaderNav/HeaderNav";
import MarketStats from "../HeaderNav/MarketStats/MarketStats";

const MainLayout = ({ leftbar, children, rightbar }) => {
  const headerHeight = 64;

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0f1b] text-white">
      {/* Header */}
      <div style={{ height: `${headerHeight}px` }}>
        <HeaderNav />
      </div>
      <MarketStats />

      {/* Content */}
      <div
        className="flex flex-col md:flex-row flex-1"
        style={{ height: `calc(100vh - ${headerHeight}px)` }}
      >
        {/* Left Sidebar */}
        {leftbar && (
          <div className="w-full md:w-[230px] border-b md:border-b-0 md:border-r border-gray-700 overflow-auto">
            {leftbar}
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-auto">{children}</div>

        {/* Right Sidebar */}
        {rightbar && (
          <div className="w-full md:w-[300px] border-t md:border-t-0 md:border-l border-gray-700 overflow-auto">
            {rightbar}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
