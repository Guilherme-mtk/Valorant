/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import NotFoundPage from 'features/NotFoundPage/Loadable';
import Agents from 'features/Agents/Loadable';
import Maps from '../Maps/index';
import Weapons from '../Weapons/index';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Agents} />
        <Route exact path="/maps" component={Maps} />
        <Route exact path="/weapons" component={Weapons} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default hot(App);
