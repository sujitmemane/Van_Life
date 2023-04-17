import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./server.js";
function App() {
  return (
    <BrowserRouter>
      <nav className="w-full  flex flex-row items-center justify-between py-4 px-8 fixed  top-0 z-50 bg-white">
        <Link to="/" className="text-2xl text-[#333333]">
          <h1>Van Life 🛻</h1>
        </Link>
        <ul className="uppercase font-bold  text-[#333333] flex space-x-4">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
