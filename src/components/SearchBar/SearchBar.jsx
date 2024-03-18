import DarkLightmode from "../DarkLightmode/Darklightmode";
import "./Searchbar.css";
const SearchBar = () => {
  return (
    <nav>
      <div></div>
      <input type="search" placeholder="Search Pokemon" />
      <DarkLightmode />
    </nav>
  );
};

export default SearchBar;
