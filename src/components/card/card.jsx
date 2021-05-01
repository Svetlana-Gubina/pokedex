import React from 'react';
import {Link} from "react-router-dom";

const Card = (props) => {
    const {name, id} = props;

    const handlePokemonCatch = () => {
        console.log('catch' + name);
    };

    return (
        <div className="pokemon-card">
            <Link to={`/pokemon/${id}`} className="pokemon-card__link">
            <img className="pokemon-card__img"
                        src={`img/${id}.png`}
                        width="100"
                        height="40"
                        alt={name}
                      />
            </Link>
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