import HeaderNav from "../HeaderNav/HeaderNav";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-[#0d0f1b] text-white">
      <HeaderNav />
      <div className="flex flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
