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
            <p>#{content.id}</p>
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
