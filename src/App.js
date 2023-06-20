import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Footer from "./containers/Footer/Footer";
import Nav from "./containers/Nav/Nav";
import ContainerHome from './containers/ContainerHome/ContainerHome';
import ContainerMenu from './containers/ContainerMenu/ContainerMenu';
import StockProducts from './componets/StockProducts/StockProducts';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<ContainerHome />} />
          <Route path="/menu" element={<ContainerMenu />} />
          <Route path="/menu/stock" element={<StockProducts />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
