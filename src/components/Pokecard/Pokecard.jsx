import { useEffect, useState } from "react";
import "./Pokecard.css";
import SinglePokemon from "../SinglePokemon/SinglePokemon";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { SearchValueContext } from "../../context/context";
import { useContext } from "react";
const Pokecard = () => {
  const [bigdata, setBigdata] = useState();
  const { searchInput } = useContext(SearchValueContext);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=200")
      .then((res) => res.json())
      .then((fetchdata) => setBigdata(fetchdata.results))

      .catch((err) => console.log("fehler im fetch", err));
  }, []);

  // console.log(bigdata);
  /*  console.log(fetchdata.results); */
  // console.log(searchInput);

  return (
    <>
      <SearchBar noMenu="no_menu" />
      <section className="kacheln">
        {bigdata ? (
          bigdata.map((item, index) =>
            item.name.includes(searchInput) ? (
              <Link to={`/detail/${item.name}`}>
                <article key={index} className="poke-box">
                  <SinglePokemon bild={item.url} /* singleData={bigdata} */ />
                  <p className="pokname">{item.name}</p>
                  <p className="unterediv"></p>
                </article>
              </Link>
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
