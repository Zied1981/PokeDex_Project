import { useEffect, useState } from "react";
import "./Filterpage.css";
const Filterpage = () => {

  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        if (!response.ok) {
          throw new Error('Netzwerk Fehler.');
        }
        const data = await response.json();
        setPokemonTypes(data.results);
      } catch (error) {
        console.error('Fehler beim abrufen der Daten.', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPokemonByType = async () => {
      if (selectedType) {
        try {
          const response = await fetch(selectedType.url);
          if (!response.ok) {
            throw new Error('Netzwerk Fehler.');
          }
          const data = await response.json();
          setFilteredPokemon(data.pokemon.map(p => p.pokemon));
        } catch (error) {
          console.error('Fehler beim abrufen der Daten.', error);
        }
      }
    };

    fetchPokemonByType();
  }, [selectedType]);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <h1>Pokemon Types</h1>
      <ul>
        {pokemonTypes.map((type, index) => (
          <li key={index} onClick={() => handleTypeClick(type)}>
            {type.name}
          </li>
        ))}
      </ul>
      {selectedType && (
        <div>
          <ul>
            {filteredPokemon.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

}

export default Filterpage;
