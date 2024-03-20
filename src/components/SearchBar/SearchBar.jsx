import { useContext, useState } from "react";
import BurgerMenü from "../BurgerMenü/BurgerMenü";
import Arrow from "/src/assets/backbtn.svg";
import Filterpage from "../Filterpage/Filterpage";
import DarkLightmode from "../DarkLightmode/Darklightmode";
import "./Searchbar.css";
import { MenuOpenContext, SearchValueContext } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";
import FetchData from "../FetchData/FetchData";
const SearchBar = (props) => {
  const { searchInput, setSearchInput } = useContext(SearchValueContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuOpenContext);
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
      <FetchData />
      <Link style={{ cursor: "pointer" }} className={props.noMenu} to="/">
        <img src={Arrow} alt="" />
      </Link>
      <div className={props.arrow}>
        <BurgerMenü onClick={toggleMenu} />
      </div>
      {isMenuOpen && <Filterpage id="hallo" className="tschau" />}
      <input
        onKeyPress={goToSite}
        onChange={(event) => setFirstInput(event.target.value)}
        value={firstInput}
        type="search"
        placeholder="Search Pokemon"
      />

      <DarkLightmode style={{ cursor: "pointer" }} />
    </nav>
  );
};

export default SearchBar;
