import React, {useState} from 'react';
import {Link} from "react-router-dom";
// import {connect} from 'react-redux';
// import axios from 'axios';
// import {ActionCreator} from '../../store/action';

const Card = (props) => {
    // const {name, id, changePokemonState, addPokemonToCaught} = props;
    // const url = `http://localhost:3004/pokemons/${id}`;
    const {name, id, caughtClass} = props;
    const [isCaught, setIsCaught] =  useState(false);
    let specialCardClass = isCaught ? `pokemon-card__caught` : ``;


    const handlePokemonCatch = () => {
        setIsCaught(!isCaught);

        // localStorage
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
        // const cancelTokenSource = axios.CancelToken.source();
        // axios.put(url, {
            // name: name,
            // isCaught: true,
            // captureDate: new Date(Date.now())
        //   }, {
            // cancelToken: cancelTokenSource.token
        //   })
        //   .then((res) => {
        //    console.log(res.data);
        //   })
        //   .catch(() => {
            // throw new Error(`Error!`);
        //   });

        // changePokemonState(id);
        // addPokemonToCaught(id);
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

// const mapDispatchToProps = (dispatch) => ({
    // changePokemonState(id) {
    //   dispatch(ActionCreator.changePokemonState(id));
    // },
    // addPokemonToCaught(id) {
        // dispatch(ActionCreator.addPokemonToCaught(id));
    // },
// });
// export {Card};
// export default connect(null, mapDispatchToProps)(Card);

export default Card;