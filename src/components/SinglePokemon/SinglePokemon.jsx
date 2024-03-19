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

  console.log(data);

  return data ? (
    <section className="singlebox">
      <img src={data.sprites.front_default} alt="bilder" />
      <p className="pok-id">#{data.id}</p>
    </section>
  ) : (
    "laden"
  );
};

export default SinglePokemon;
