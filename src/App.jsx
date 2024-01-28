
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./assets/styles/styles.css"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Travel from "./components/Travel/Travel";
import Gallery from "./components/Gallery/Gallery";
import Store from "./components/ItemListContainer/ItemListContainer";
import Contact from "./components/Contact/Contact";
import ErrorHandler from "./components/ItemListContainer/ErrorHandler";
import ProductCard from "./components/ItemListContainer/ProductCard";

function App() {
  return (
    <>
      
      <BrowserRouter basename="/">
      <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Travel"} element={<Travel />} />
          <Route path={"/Gallery"} element={<Gallery />} />
          <Route path={"/Store"} element={<Store />} />
          <Route path="/Store/:category" element={<Store />} />
          <Route path="/Store/:category/:product" element={<ProductCard />} />
          <Route path={"/Contact"} element={<Contact />} />
          <Route path={"*"} element={<ErrorHandler />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
