import MarketSidebar from './components/Sidebar/MarketSidebar/MarketSidebar';
import OrderBook from './components/Orderbook/Orderbook';
import MainLayout from './components/Layout/MainLayout';

function App() {
  return (
    <MainLayout
      leftbar={<MarketSidebar />}
      rightbar={<OrderBook />}
    >
      <div>Main content area</div>
    </MainLayout>
  );
}

export default App;
