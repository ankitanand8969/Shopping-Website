import "./App.css";
import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import NavbarReact from "./component/NavbarReact";



function App() {
  return (
    <>
      <NavbarReact />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Footer  className ='footer'/> */}
    </>
  );
}

export default App;
