import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(()=> {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(res=> {
        console.log(res.data);
        console.log(res.data.results);
        setPokemonList(res.data.results)})
      .catch((err)=>console.log(err))
  }, [])
  
  return (
    <div className="App">
      <ul>
        {
          pokemonList.map((pokemon, index) => {
            return (<li key={index}>{pokemon.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
