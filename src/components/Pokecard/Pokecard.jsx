import SinglePokemon from "../SinglePokemon/SinglePokemon";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {
  SearchValueContext,
  GlobalFetchContext,
  FilterContext,
  TypeContext,
} from "../../context/context";
import { useContext } from "react";
import FetchData from "../FetchData/FetchData";
import "./Pokecard.css";

const Pokecard = () => {
  // const [bigdata, setBigdata] = useState();
  const { searchInput } = useContext(SearchValueContext);
  const { fetchContext, setFetchContext } = useContext(GlobalFetchContext);

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=200")
  //     .then((res) => res.json())
  //     .then((fetchdata) => setBigdata(fetchdata.results))

  //     .catch((err) => console.log("fehler im fetch", err));
  // }, []);

  // console.log(bigdata);
  /*  console.log(fetchdata.results); */
  // console.log(searchInput);
  // console.log("typ:", type);
  // console.log("filt:", filter);
  // console.log(fetchContext);

  let link = document.getElementById("#link1");

  return (
    <>
      <SearchBar noMenu="no_menu" />
      <section className="kacheln">
        {fetchContext ? (
          fetchContext.map((item, index) =>
            item.name.includes(searchInput) ? (
              <SinglePokemon bild={item.url} />
            ) : (
              ""
            )
          )
        ) : (
          <p>laden...</p>
        )}
      </section>
    </>
  );
};

//hier componente rendern (single pokemon),props  url übergeben und dann fetchen in componente.
export default Pokecard;
