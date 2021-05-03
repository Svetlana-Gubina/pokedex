import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const Card = (props) => {
    const {name, id, changePokemonState, addPokemonToCaught} = props;
    const [isCaught, setIsCaught] =  useState(false);
    let specialCardClass = isCaught ? `pokemon-card__caught` : ``;

    const handlePokemonCatch = () => {
        setIsCaught(!isCaught);

        changePokemonState(id);
        addPokemonToCaught(id);
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
            <button
            className="pokemon-card__btn"
            type="button"
            onClick={() => handlePokemonCatch()}
            disabled={isCaught}
          >Catch</button></div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    changePokemonState(id) {
      dispatch(ActionCreator.changePokemonState(id));
    },
    addPokemonToCaught(id) {
        dispatch(ActionCreator.addPokemonToCaught(id));
    },
});

export {Card};
export default connect(null, mapDispatchToProps)(Card);