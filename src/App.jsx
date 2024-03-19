import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Detailpage from "./pages/Detailpage/Detailpage";
import { SearchValueContext } from "./context/context";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <SearchValueContext.Provider value={{ searchInput, setSearchInput }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detailpage />} />
        </Routes>
      </BrowserRouter>
    </SearchValueContext.Provider>
  );
}

export default App;
