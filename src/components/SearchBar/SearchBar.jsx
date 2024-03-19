import { useContext, useState } from "react";
import BurgerMenü from "../BurgerMenü/BurgerMenü";
import DarkLightmode from "../DarkLightmode/Darklightmode";
import "./Searchbar.css";
import { SearchValueContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const { searchInput, setSearchInput } = useContext(SearchValueContext);

  let navigate = useNavigate();
  const goToSite = () => {
    if (event.key === "Enter") {
      navigate(`/detail/${searchInput}`);
      // console.log("neuer link");
    }
  };

  return (
    <nav>
      <BurgerMenü />
      <input
        onKeyPress={goToSite}
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
