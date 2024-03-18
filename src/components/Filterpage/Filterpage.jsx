import { useEffect, useState } from "react";
import "./Filterpage.css";
const Filterpage = () => {

  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPokemonTypes(data.results);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <img src="./src/assets/TYPE.png" alt="Type Image" />
      <ul>
        {pokemonTypes.map((type, index) => (
          <li key={index}>{type.name}</li>
        ))}
      </ul>
    </div>
  );

}

export default Filterpage;
