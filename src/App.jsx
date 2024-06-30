import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { useState } from "react";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
function App() {
  const [showLogin, setshowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setshowLogin={setshowLogin} /> : <> </>}
      <div className="w-[80%] m-auto">
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
