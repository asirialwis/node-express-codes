import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import About from "./components/navPages/About.jsx";
import Home from "./components/navPages/Home.jsx";
import Vans from "./components/navPages/Vans.jsx";
function App() {
  return (
    <BrowserRouter>
        <Link to = "/">vanlife</Link>
        <Link to = "/about">About</Link>
        <Link to = "/home">Home</Link>
        <Link to = "/vans">Vans</Link>
      <Routes>
        <Route path="/" element={<Vans/>} />
        <Route path = "/vans" element= {<Vans/>}></Route>
        <Route path="/about" element={<About></About>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
  
export default App;
