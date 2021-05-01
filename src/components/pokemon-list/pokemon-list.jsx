import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../card/card';
import './pokemon-list.scss';

const PokemonList = (props) => {
    const {pokemon} = props;
    console.log(pokemon);

    return (
        <section className="pokemon-list">
            <h2 className="visually-hidden">Pokemon list</h2>
            {pokemon.map((p) => <Card 
                                   key={uuidv4()} 
                                   name={p.name} 
                                   id={p.id} />)}
        </section>
    );
};

export default PokemonList;