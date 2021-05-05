import React from 'react';
import {Route, Switch} from "react-router-dom";
import MainPage from '../main-page/main-page';
import Pokemon from '../pokemon/pokemon';
import Caught from '../caught/caught';
import PageNotFound from '../page-not-found/page-not-found';
import {AppRoute} from '../../constants';
import './app.scss';


const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT} component={MainPage} />
      <Route exact path={AppRoute.POKEMON} component={Pokemon} />
      <Route exact path={AppRoute.CAUGHT} component={Caught} />
      <Route component={PageNotFound} />
    </Switch>
  );
};


export default App;