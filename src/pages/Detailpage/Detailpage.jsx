import "./Detailpage.css";
import { useEffect, useState } from "react";

const Detailpage = () => {
  // *useState für Name, Bild und Type
  const [content, setContent] = useState();

  // *Fetch für Name, Bild und Type
  useEffect(() => {
    let id = "bulbasaur";
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <section>
      {content ? (
        <div>
          <img src={content.sprites.front_default} alt="pokemon" />
          <p>{content.id}</p>
          <p>{content.name}</p>
          <div>
            {content.types.map((item, index) => (
              <div key={index}>
                <button> {item.type.name}</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p> Loading ... </p>
      )}
    </section>
  );
};

export default Detailpage;
