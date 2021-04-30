import React from 'react';
// import {Link} from "react-router-dom";

const Card = (props) => {
    const {name, imgSrc} = props;

    const handlePokemonCatch = () => {
        console.log('catch' + name);
    };

    return (
        <div className="pokemon-card">
            <a href="/">
            <img className="pokemon-card__img"
                        src={imgSrc}
                        width="160"
                        height="100"
                        alt={name}
                      />
            </a>
            <p className="pokemon-card__name">{name}</p>
            <button
            className="pokemon-card__btn"
            type="button"
            onClick={() => handlePokemonCatch()}
            disabled={false}
          >Catch</button></div>
    );
};

export default Card;