import MarketSidebar from './components/Sidebar/MarketSidebar/MarketSidebar';
import OrderBook from './components/Orderbook/Orderbook';
import MainLayout from './components/Layout/MainLayout';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <MainLayout
      leftbar={<MarketSidebar />}
      rightbar={<OrderBook />}
    >
      <MainContent/>
    </MainLayout>
  );
}

export default App;
