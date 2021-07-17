// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacterContainer = styled.div`
    background-color: red;
    width: 60%;
    margin-bottom: 10px;
    display: flex;
    flex-flow:column;
    align-content: center;
    border-radius: 8px;

    .dropdown {
        overflow: hidden;
        transition: max-height 1s;
        max-height: 0;
    }

    .dropdown.expand {
        max-height: 355.250px;
    }
`


const Character = (props) => {
    const { cardData } = props;
    function expander(id) {
        const object = document.getElementById(`${id}`);
        object.classList.toggle("expand");
    };
    return (
            <StyledCharacterContainer>
                <button className='nameplate' onClick={() => expander(cardData.name)}>
                <h2>{cardData.name}</h2>
                </button>
                <div className='dropdown' id={cardData.name}>
                    <h2>Gender: {cardData.gender}</h2>
                    <h2>Height: {cardData.height}</h2>
                    <h2>Mass: {cardData.mass}</h2>
                    <h2>Birth year: {cardData.birth_year}</h2>
                    <h2>Eye Color: {cardData.eye_color}</h2>
                    <h2>Hair color: {cardData.hair_color}</h2>
                    <h2>Skin color: {cardData.skin_color}</h2>
                </div>
            </StyledCharacterContainer>
            )};

export default Character;