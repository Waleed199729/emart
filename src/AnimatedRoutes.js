import React, { useState, createContext } from "react";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Product from "./components/Product";
import Products from "./components/Products";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PlaceOrder from "./components/PlaceOrder";
import OrderHistory from "./components/OrderHistory";
import ParentRef from "./components/ParentRef";

export const MyOwnName = createContext(); //ContextAPI or ReactContext

const AnimatedRoutes = () => {
  const [name, setName] = useState("Waleed MERN Developer");

  const location = useLocation();

  return (
    <>
      <MyOwnName.Provider value={name}>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/parentref" element={<ParentRef />} />
          </Routes>
        </AnimatePresence>
      </MyOwnName.Provider>
    </>
  );
};

export default AnimatedRoutes;
