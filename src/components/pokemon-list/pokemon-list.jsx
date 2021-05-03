import React from 'react';
import Card from '../card/card';
import './pokemon-list.scss';

const PokemonList = (props) => {
    const {pokemons} = props;

    return (
        <section className="pokemon-list">
            <h2 className="visually-hidden">Pokemon list</h2>
            {pokemons.map((p) => <Card 
                                   key={p.id} 
                                   name={p.name} 
                                   id={p.id} />)}
        </section>
    );
};

export default PokemonList;