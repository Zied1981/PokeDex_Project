import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Detailpage from "./pages/Detailpage/Detailpage";
import { SearchValueContext, MenuOpenContext } from "./context/context";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <SearchValueContext.Provider value={{ searchInput, setSearchInput }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detailpage />} />
          </Routes>
        </BrowserRouter>
      </SearchValueContext.Provider>
    </MenuOpenContext.Provider>
  );
}

export default App;
