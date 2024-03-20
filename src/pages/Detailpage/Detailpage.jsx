import { useParams } from "react-router-dom";
import "./Detailpage.css";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Logo from "../../components/Logo/Logo";

const Detailpage = () => {
  // *useState für Name, Bild und Type
  const [content, setContent] = useState();

  // * useParams für Namen für dynamischen Link
  const { id } = useParams();
  console.log(id);

  // *Fetch für Name, Bild und Type
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, [id]);

  // * if else damit wir Nuller vor den Zahlen haben
  let numbers = "";
  if (content) {
    if (content.id < 10) {
      numbers = `000${content.id}`;
    } else if (content.id >= 10 && content.id < 100) {
      numbers = `00${content.id}`;
    } else if (content.id >= 100 && content.id < 1000) {
      numbers = `0${content.id}`;
    } else {
      `${content.id}`;
    }
  }

  return (
    <section>
      <Logo />
      <SearchBar arrow={"arrow"} />
      {content ? (
        <div className="details">
          <div className="image-bg">
            <img
              src={content.sprites.other["official-artwork"].front_default}
              alt="pokemon"
            />
          </div>
          <div className="name">
            <p>#{numbers}</p>
            <p>{content.name}</p>
          </div>
          <div className="buttons">
            {content.types.map((item, index) => (
              <div key={index}>
                <button className={item.type.name}> {item.type.name}</button>
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
