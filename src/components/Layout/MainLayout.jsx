import HeaderNav from "../HeaderNav/HeaderNav";

const MainLayout = ({ leftbar, children, rightbar }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d0f1b] text-white">
      <HeaderNav />

      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Sidebar */}
        {leftbar && (
          <div className="w-full md:w-[230px] border-b md:border-b-0 md:border-r border-gray-700 md:overflow-auto">
            {leftbar}
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 md:overflow-auto">
          {children}
        </div>

        {/* Right Sidebar */}
        {rightbar && (
          <div className="w-full md:w-[300px] border-t md:border-t-0 md:border-l border-gray-700 md:overflow-auto">
            {rightbar}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
