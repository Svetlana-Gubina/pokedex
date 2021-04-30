import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../card/card';
import './pokemon-list.scss';

export default function PokemonList(props) {
    const {pokemon} = props;

    return (
        <div className="pokemon-list">
            {pokemon.map((p) => <Card 
                                   key={uuidv4()} 
                                   name={p} 
                                   imgSrc={p} />)}
        </div>
    )
}
