// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacterContainer = styled.div`
    width: 70%;
    margin-bottom: 10px;
    display: flex;
    flex-flow:column;
    align-items: center;
    border-radius: 8px;

    button {
        width: 100%;
        border-radius:8px;
        border: none;
        transition: .4s;
        transition-delay:0s;
    }

    button.expand {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

    }

    .dropdown {
        display:flex;
        flex-flow:column;
        align-items:center;
        overflow: hidden;
        max-height: 0;
        background-color: rgba(255, 255, 255, 0.5);
        width: 100%;
        transition:.4s;
        transition-delay:.4s;
    }

    .dropdown.expand {
        max-height: 355.250px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;


/* Could not get these transitions to function the way I wanted them to. I wanted them to have inverse orders on the delays such that when expanding, the bottom rounded corners would straighten out first and the expanded div would extend from those straight corners. And when contracting, the div would retract first and then the corners would round out again. Could not figure out how to give them separate orders without potentially adding more classes, which I was too tired to do. Was fun to add qualities to the array though and mess with the classes. */
    }
`


const Character = (props) => {
    const { cardData } = props;
    function expander(divId, buttonId) {
        const infoDiv = document.getElementById(`${divId}`);
        infoDiv.classList.toggle("expand");
        const nameButton = document.getElementById(`${buttonId}`)
        nameButton.classList.toggle("expand");
    };
    return (
            <StyledCharacterContainer>
                <button className='nameplate' id={cardData.identification} onClick={() => expander(cardData.name, cardData.identification)}>
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