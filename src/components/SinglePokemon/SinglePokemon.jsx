import { useState, useEffect } from "react";
import "./SinglePokemon.css";
const SinglePokemon = ({ bild }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${bild}`)
      .then((res) => res.json())
      .then((fetch) => setData(fetch))

      .catch((err) => console.log("fehler im fetch", err));
  }, []);

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
    <section className="singlebox">
      <img
        src={data.sprites.other["official-artwork"].front_default}
        alt="bilder"
      />
      <p className="pok-id">#{numbers}</p>
    </section>
  ) : (
    "laden"
  );
};

export default SinglePokemon;
