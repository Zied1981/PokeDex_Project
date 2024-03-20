import { useState, useEffect, useContext } from "react";
import "./SinglePokemon.css";
import { TypeContext } from "../../context/context";
const SinglePokemon = ({ bild }) => {
  const [data, setData] = useState();
  const { type, setType } = useContext(TypeContext);

  useEffect(() => {
    fetch(`${bild}`)
      .then((res) => res.json())
      .then((fetch) => setData(fetch))

      .catch((err) => console.log("fehler im fetch", err));
    /*  data? setType(data.types[0].type.name); */
    data ? setType(data.types[0].type.name) : console.log("fish");
    /* setData(data.types[0].type.name) : console.log("nochtsfish"); */
  }, []);
  console.log(bild);
  console.log(data);

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
