import { useState } from "react";
import BurgerMenü from "../BurgerMenü/BurgerMenü";
import DarkLightmode from "../DarkLightmode/Darklightmode";
import "./Searchbar.css";
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <nav>
      <BurgerMenü />
      <input
        onChange={(event) => setSearchInput(event.target.value)}
        value={searchInput}
        type="search"
        placeholder="Search Pokemon"
      />
      <DarkLightmode />
    </nav>
  );
};

export default SearchBar;
