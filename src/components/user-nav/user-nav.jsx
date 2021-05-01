import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';

const AUTHORIZED = true;

const UserNav = () => {
    return (AUTHORIZED ? 
    <Link to={AppRoute.CAUGHT} className="header__nav-link">My pokemons</Link> 
    : <Link to="/" className="header__nav-link">Sign in</Link>
    );
};

export default UserNav;