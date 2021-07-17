import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';


const App = () => {
  const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then(res => {
            console.log(res.data);
            setCharacterData(res.data);
        })
        .catch(err => console.log(err));
    }, []);
    console.log(characterData);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characterData.map(element => <Character cardData={element}/>)}
    </div>
  );
};

export default App;
