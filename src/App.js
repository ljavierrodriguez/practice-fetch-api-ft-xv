import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        //setPokemons(data);
        return data;
      })
      .then(data => {
        data.results.forEach(async (pok, index) => {
          console.log(pok.url)
          const response = await fetch(pok.url);
          const info = await response.json();
          data.results[index] = info;
          setPokemons(data);
        });
      })
    /* .then(async data => { 
      console.log(data)
      const resp = await fetch(data.location_area_encounters);
      const info = await resp.json();
      data.location_area_encounters = info;
      setPokemons(data);
      console.log(data);
    }); */
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">
            {
              pokemons.results?.length > 0 &&
              pokemons.results.map((pok) => {
                return (
                  <li key={pok.name} className='list-group-item list-group-item-action'>
                    {pok.name} / {!!pok.order && pok.order} 
                  
                   <img src={!!pok.sprites && pok.sprites.front_default} alt="" /></li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
