import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./assets/styles/styles.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Travel from "./components/Travel/Travel";
import Gallery from "./components/Gallery/Gallery";
import Store from "./components/ItemListContainer/ItemListContainer";
import Contact from "./components/Contact/Contact";
import ErrorHandler from "./components/ItemListContainer/ErrorHandler";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import CartContextProvider from "./components/context/CartContext"
import Checkout from "./components/CartWidget/Checkout"
import Cart from "./components/CartWidget/Cart";

function App() {

  return (
    <>
        <CartContextProvider>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Store"} element={<Store/>}/>
          <Route path="/Store/:category/" element={<Store />} />
          <Route path="/Store/:category/:itemId" element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<ErrorHandler />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Travel"} element={<Travel />} />
          <Route path={"/Gallery"} element={<Gallery />} />
          <Route path={"/Contact"} element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
        </CartContextProvider>

    </>
  );
}

export default App;
