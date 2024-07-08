import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Cart from './components/Cart';
import Support from './components/Support';
import TopNav from './components/TopNav';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import CheckOutCard from './components/CheckOutCard';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="" style={{ background: "linear-gradient(180deg, #FCFCFC 0%, #EAEAEA 100%)" }}>
        <TopNav />
        <Routes>
          <Route path="/" element={<LandingPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/support" element={<Support />} />
          <Route path="/checkout" element={<CheckOutCard />} />
  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
