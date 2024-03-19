import { useState, useEffect } from "react";
import "./SinglePokemon.css";
const SinglePokemon = ({ bild /* singleData  */ }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${bild}`)
      .then((res) => res.json())
      .then((fetch) => setData(fetch))

      .catch((err) => console.log("fehler im fetch", err));
  }, []);

  // console.log(data);
  // if (data.id < 10) {
  //   return "00";
  // }

  return data ? (
    <section>
      <p>{data.id}</p>
      <img src={data.sprites.front_default} alt="bilder" />
    </section>
  ) : (
    "laden"
  );
};

export default SinglePokemon;
