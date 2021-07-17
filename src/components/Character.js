// Write your Character component here
import React from 'react';

const Character = (props) => {
    const { cardData } = props;
    return (
            <div className='character-container'>
                <h2>{cardData.name}</h2>
                <div className='dropdown'>
                    <h2>Gender: {cardData.gender}</h2>
                    <h2>Height: {cardData.height}</h2>
                    <h2>Mass: {cardData.mass}</h2>
                    <h2>Birth year: {cardData.birth_year}</h2>
                    <h2>Eye Color: {cardData.eye_color}</h2>
                    <h2>Hair color: {cardData.hair_color}</h2>
                    <h2>Skin color: {cardData.skin_color}</h2>
                </div>
            </div>
            )};

export default Character;