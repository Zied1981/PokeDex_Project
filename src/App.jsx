import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Detailpage from "./pages/Detailpage/Detailpage";
import {
  SearchValueContext,
  MenuOpenContext,
  GlobalFetchContext,
} from "./context/context";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fetchContext, setFetchContext] = useState([]);

  return (
    <GlobalFetchContext.Provider value={{ fetchContext, setFetchContext }}>
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
    </GlobalFetchContext.Provider>
  );
}

export default App;
