import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Travel from "./components/Travel/Travel";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Travel" Component={Travel} />
          <Route path="/Gallery" Component={Gallery} />
          <Route path="/Store" Component={ItemListContainer} />
          <Route path="/Contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* 
    <Header />
    <ItemListContainer />
    <Footer /> */}
    </>
  );
}

export default App;
