import "./Pokecard.css";
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

const Pokecard = () => {
  // const [bigdata, setBigdata] = useState();
  const { searchInput } = useContext(SearchValueContext);
  const { fetchContext, setFetchContext } = useContext(GlobalFetchContext);
  const { filter, setFilter } = useContext(FilterContext);
  const { type, setType } = useContext(TypeContext);

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=200")
  //     .then((res) => res.json())
  //     .then((fetchdata) => setBigdata(fetchdata.results))

  //     .catch((err) => console.log("fehler im fetch", err));
  // }, []);

  // console.log(bigdata);
  /*  console.log(fetchdata.results); */
  // console.log(searchInput);
  console.log("typ:", type);
  console.log("filt:", filter);
  console.log(fetchContext);

  return (
    <>
      <SearchBar noMenu="no_menu" />
      <section className="kacheln">
        {filter ? (
          fetchContext ? (
            fetchContext.map((item, index) =>
              type === filter ? (
                <Link key={index} to={`/detail/${item.name}`}>
                  <article className="poke-box">
                    <SinglePokemon bild={item.url} />
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
          )
        ) : fetchContext ? (
          fetchContext.map((item, index) =>
            item.name.includes(searchInput) ? (
              <Link key={index} to={`/detail/${item.name}`}>
                <article className="poke-box">
                  <SinglePokemon bild={item.url} />
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
        {/*  {fetchContext ? (
          fetchContext.map((item, index) =>
            item.name.includes(searchInput) ? (
              <Link key={index} to={`/detail/${item.name}`}>
                <article className="poke-box">
                  <SinglePokemon bild={item.url} />
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
        )} */}
      </section>
    </>
  );
};

//hier componente rendern (single pokemon),props  url übergeben und dann fetchen in componente.
export default Pokecard;
