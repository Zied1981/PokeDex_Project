import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Detailpage from "./pages/Detailpage/Detailpage";
import {
  SearchValueContext,
  MenuOpenContext,
  GlobalFetchContext,
  TypeContext,
  FilterContext,
} from "./context/context";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fetchContext, setFetchContext] = useState([]);
  const [type, setType] = useState();
  const [filter, setFilter] = useState();

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <TypeContext.Provider value={{ type, setType }}>
        <GlobalFetchContext.Provider value={{ fetchContext, setFetchContext }}>
          <MenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            <SearchValueContext.Provider
              value={{ searchInput, setSearchInput }}
            >
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/detail/:id" element={<Detailpage />} />
                </Routes>
              </BrowserRouter>
            </SearchValueContext.Provider>
          </MenuOpenContext.Provider>
        </GlobalFetchContext.Provider>
      </TypeContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;
