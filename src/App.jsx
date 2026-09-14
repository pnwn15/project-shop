import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/layout/Navbar";
import Layout from "./components/layout/Layout";
import Product from "./pages/Products/Products";
// import Products from "./pages/Products/Products";
// import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
