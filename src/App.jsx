import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav className="container mx-auto  flex flex-row items-center justify-between py-4 px-8 ">
        <Link to="/" className="text-2xl text-[#333333]">
          <h1>Van Life 🛻</h1>
        </Link>
        <ul className="uppercase font-bold  text-[#333333]">
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
