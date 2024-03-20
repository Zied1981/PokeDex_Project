import { useState, useEffect, useContext } from "react";
import "./SinglePokemon.css";
import { TypeContext, FilterContext } from "../../context/context";
const SinglePokemon = ({ bild }) => {
  const [data, setData] = useState();
  const { type, setType } = useContext(TypeContext);
  const { filter, setFilter } = useContext(FilterContext);

  useEffect(() => {
    fetch(`${bild}`)
      .then((res) => res.json())
      .then((fetch) => setData(fetch))

      .catch((err) => console.log("fehler im fetch", err));
    /*  data? setType(data.types[0].type.name); */
    data ? console.log(data.types[0].type.name) : console.log("fish");
    /* setData(data.types[0].type.name) : console.log("nochtsfish"); */
  }, []);
  // console.log(bild);
  // console.log(data);

  let numbers = "";
  if (data) {
    if (data.id < 10) {
      numbers = `000${data.id}`;
    } else if (data.id >= 10 && data.id < 100) {
      numbers = `00${data.id}`;
    } else if (data.id >= 100 && data.id < 1000) {
      numbers = `0${data.id}`;
    } else {
      `${data.id}`;
    }
  }

  // console.log(data);

  return data ? (
    filter ? (
      filter === data.types[0].type.name ? (
        <section className="singlebox">
          <article className="poke-box">
            <img
              src={data.sprites.other["official-artwork"].front_default}
              alt="bilder"
            />
            <p className="pokname">{data.name}</p>
            <p className="unterediv"></p>
            <p className="pok-id">#{numbers}</p>
          </article>
        </section>
      ) : (
        ""
      )
    ) : (
      <section className="singlebox">
        <article className="poke-box">
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt="bilder"
          />
          <p className="pokname">{data.name}</p>
          <p className="unterediv"></p>
          <p className="pok-id">#{numbers}</p>
        </article>
      </section>
    )
  ) : (
    "laden"
  );
};

export default SinglePokemon;
