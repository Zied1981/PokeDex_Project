import { useEffect, useState } from "react";
import "./Pokecard.css";
import SinglePokemon from "../SinglePokemon/SinglePokemon";
import { Link } from "react-router-dom";
const Pokecard = () => {
  const [bigdata, setBigdata] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-form?offset=0&limit=1473")
      .then((res) => res.json())
      .then((fetchdata) => setBigdata(fetchdata.results))

      .catch((err) => console.log("fehler im fetch", err));
  }, []);

  console.log(bigdata);
  /*  console.log(fetchdata.results); */

  return (
    <>
      <section className="kacheln">
        {bigdata ? (
          bigdata.map((item, index) => (
            <Link to={`/detail/${item.name}`}>
              <article key={index} className="poke-box">
                <SinglePokemon bild={item.url} /* singleData={bigdata} */ />
                <p>{item.name}</p>
              </article>
            </Link>
          ))
        ) : (
          <p>laden...</p>
        )}
      </section>
    </>
  );
};

//hier componente rendern (single pokemon),props  url übergeben und dann fetchen in componente.
export default Pokecard;
