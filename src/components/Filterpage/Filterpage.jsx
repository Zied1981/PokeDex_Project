import React, { useState, useEffect } from 'react';
import "./Filterpage.css";
const Filterpage = () => {

  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        if (!response.ok) {
          throw new Error('Netzwerk Fehler');
        }
        const data = await response.json();
        const filteredTypes = data.results.filter(type => type.name !== "unknown" && type.name !== "shadow");
        setPokemonTypes(filteredTypes);
      } catch (error) {
        console.error('Fehler beim anrufen der Daten (Fetch Fehler)', error);
      }
    };

    fetchData();
  }, []);

  const fetchPokemonByType = async (typeUrl) => {
    try {
      const response = await fetch(typeUrl);
      if (!response.ok) {
        throw new Error('Netzwerk Fehler');
      }
      const data = await response.json();
      const pokemonUrls = data.pokemon.map(p => p.pokemon.url);
      const pokemonDataPromises = pokemonUrls.map(url => fetch(url).then(response => response.json()));
      const pokemonData = await Promise.all(pokemonDataPromises);
      setPokemonList(pokemonData);
    } catch (error) {
      console.error('Fehler beim anrufen der Daten (Fetch Fehler)', error);
    }
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    fetchPokemonByType(type.url);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "bug":
        return "#3bb900";
      case "dark":
        return "#000000";
      case "dragon":
        return "#00458a";
      case "electric":
        return "#FFEC00";
      case "fairy":
        return "#FC91FF";
      case "fighting":
        return "#FF0000 ";
      case "fire":
        return "##FF6100";
      case "flying":
        return "#ccdadd";
      case "ghost":
        return "#9B00FF";
      case "grass":
        return "#09B200";
      case "ground":
        return "#A86000";
      case "ice":
        return "#00D0FF";
      case "normal":
        return "#AFAFAF ";
      case "plant":
        return "#0CFF00";
      case "poison":
        return "#D300FF";
      case "psychic":
        return "#FE4CF1";
      case "rock":
        return "#EDBF00";
      case "steel":
        return "#006AB1";
      case "water":
        return "#009CFF";
      default:
        return "#000000"; 
    }
  };

  return (
    <section className='filter-container'>
      <img src="./src/assets/TYPE.png" alt="" />
      <section className='filter-content'>
          {pokemonTypes.map((type, index) => (
            <p className='poke-btn' key={index} onClick={() => handleTypeClick(type)} style={{ borderRadius: "0.5rem", border: "solid 1px black", color: "#FFFFFF", backgroundColor: getTypeColor(type.name), padding: '1rem', marginBottom: '5px', cursor: 'pointer' }}>
              {type.name}
            </p>
          ))}
        {selectedType && (
          <div>
            <h2>{selectedType.name} Pokemon</h2>
            <ul>
              {pokemonList.map((pokemon, index) => (
                <li key={index}>{pokemon.name} <img src={pokemon.sprites.front_default} alt="" /></li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </section>
  );
}

export default Filterpage;

