import React from 'react';
import {Route, Switch} from "react-router-dom";
import MainPage from '../main-page/main-page';
import PageNotFound from '../page-not-found/page-not-found';
import {AppRoute} from '../../constants';
import './app.scss';

export default function App() {
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT} component={MainPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
};


