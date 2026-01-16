import React from "react";
import "./atomics/molecules/Navbar/navbar.css";
import "./atomics/organisms/Artisans/artisans.css";
import "./atomics/molecules/Footer/footer.css";
import "./atomics/organisms/GetInfo/getinfo.css";
import "./pages/Products/view/styles/producto.css";
import "./pages/Products/view/styles/cart.css";
import "./atomics/molecules/Slides/slides.css";
import "./pages/Contact/view/styles/contacto.css";
import "./pages/WhoWeAre/view/styles/whoweare.css";
import "./pages/Auth/view/styles/admin.css";
import "./pages/Auth/view/styles/profile.css";
import "./pages/InteriorDesign/view/styles/interiordesign.css";
import "./pages/Home/view/styles/home.css";
import "./pages/Auth/view/styles/signin.css";
import Navbar from "./atomics/molecules/Navbar/Navbar";
import Footer from "./atomics/molecules/Footer/Footer";
import Home from "./pages/Home/view/Home";
import AllProducts from "./pages/Products/view/AllProducts";
import Somos from "./pages/WhoWeAre/view/WhoWeAre";
import Contacto from "./pages/Contact/view/Contact";
import Interiorismo from "./pages/InteriorDesign/view/InteriorDesign";
import Buscar from "./pages/Products/view/Buscar";
import Producto from "./pages/Products/view/Producto";
import Wishlist from "./pages/Products/view/Wishlist";
import Cart from "./pages/Products/view/Cart";
import SignIn from "./pages/Auth/view/SignIn";
import Admin from "./pages/Auth/view/Admin";
import SignUp from "./pages/Auth/view/SignUp";
import Profile from "./pages/Auth/view/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/who-we-are" element={<Somos />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/interior-design" element={<Interiorismo />} />
          <Route path="/search/:buscarId" element={<Buscar />} />
          <Route path="/product/:productoId" element={<Producto />} />
          <Route path="/wish-list" element={<Wishlist />} />
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
