import "./App.css";
import Header from "./user/components/Header/Header";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./user/containers/Home/Home";
import Contact from "./user/containers/Contact/Contact";
import Products from "./user/containers/Products/Products";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
