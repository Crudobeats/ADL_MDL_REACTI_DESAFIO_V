import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Nabvar";
import "./App.css";

import Home from "./views/Home";
import Contacto from "./views/Contacto";
import Nosotros from "./views/Nosotros";

function App() {
  return (
    <>
      <div className="container d-flex flex-wrap">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/nosotros" element={<Nosotros/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
