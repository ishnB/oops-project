import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Dashboard from "./components/dashboard/Dashboard";
import Sell from "./pages/sell/Sell";
import SellerDashboard from "./components/dashboard/SellerDashboard";
import BuyerDashboard from "./components/dashboard/BuyerDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sellerDashboard" element={<SellerDashboard />} />
          <Route path="/buyerDashboard" element={<BuyerDashboard />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
