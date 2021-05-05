import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {getPokemonById} from '../../utils';

const Card = (props) => {
    const {name, id, caughtClass} = props;
    const [isCaught, setIsCaught] =  useState(false);
    let specialCardClass = isCaught ? `pokemon-card__caught` : ``;

    useEffect(() => {
        if(!localStorage.getItem('my_pokemons')) {
            return;
        }
        let stored = JSON.parse(localStorage.getItem('my_pokemons'));
        if(getPokemonById(stored, id)) {
            setIsCaught(true);
        }
      }, [id]);


    const handlePokemonCatch = () => {
        setIsCaught(!isCaught);

        if(!localStorage.getItem('my_pokemons')) {
            localStorage.setItem('my_pokemons', JSON.stringify([{
                name, 
                id, 
                isCaught: true, 
                captureDate: new Date(Date.now())
            }]));
        } else {
            let stored = JSON.parse(localStorage.getItem('my_pokemons'));
            let updatedStore = [...stored, {
                name, 
                id, 
                isCaught: true, 
                captureDate: new Date(Date.now())
            }];
            localStorage.setItem('my_pokemons', JSON.stringify(updatedStore));
        }
    };

    return (
        <div className={`${specialCardClass} pokemon-card`}>
            <Link to={`/pokemon/${id}`} className="pokemon-card__link">
            <img className="pokemon-card__img"
                        src={`img/${id}.png`}
                        width="100"
                        height="40"
                        alt={name}
                      />
            </Link>
            <p className="pokemon-card__name">{name}</p>
            {caughtClass ? `` : <button
            className="pokemon-card__btn"
            type="button"
            onClick={() => handlePokemonCatch()}
            disabled={isCaught}
          >Catch</button>}
          </div>
    );
};

export default Card;