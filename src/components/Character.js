// Write your Character component here

import React from 'react';
// import { element } from 'prop-types';

const Character = (props) => {
    const { characterData } = props;
    return (
    characterData.map(element => {
                <div className='character-container'>
                    <h2>{element.name}</h2>
                    <div className='dropdown'>
                        <h2>Gender: {element.gender}</h2>
                        <h2>Height: {element.height}</h2>
                        <h2>Mass: {element.mass}</h2>
                        <h2>Birth year: {element.birth_year}</h2>
                        <h2>Eye Color: {element.eye_color}</h2>
                        <h2>Hair color: {element.hair_color}</h2>
                        <h2>Skin color: {element.skin_color}</h2>
                    </div>
                </div>    
        })
    )};

export default Character;