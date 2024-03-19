import { useContext, useState } from "react";
import BurgerMenü from "../BurgerMenü/BurgerMenü";
import Filterpage from "../Filterpage/Filterpage";
import DarkLightmode from "../DarkLightmode/Darklightmode";
import "./Searchbar.css";
import { SearchValueContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const { searchInput, setSearchInput } = useContext(SearchValueContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [firstInput, setFirstInput] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const lowerCase = firstInput.toLowerCase();
  setSearchInput(lowerCase);

  let navigate = useNavigate();
  const goToSite = () => {
    if (event.key === "Enter" && firstInput != "") {
      navigate(`/detail/${searchInput}`);
    }
  };

  return (
    <nav>
      <BurgerMenü onClick={toggleMenu} />
      {isMenuOpen && <Filterpage />}
      <input
        onKeyPress={goToSite}
        onChange={(event) => setFirstInput(event.target.value)}
        value={firstInput}
        type="search"
        placeholder="Search Pokemon"
      />
      <DarkLightmode />
    </nav>
  );
};

export default SearchBar;
