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
import AgentsDetails from '../AgentsDetails/index';
import Maps from '../Maps/index';
import Mapas from '../MapsDetails/index';
import Weapons from '../Weapons/index';
import Armas from '../WeaponsDetails/index';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Agents} />
        <Route exact path="/maps" component={Maps} />
        <Route exact path="/weapons" component={Weapons} />
        <Route path="/agents/:uuid">
          <AgentsDetails />
        </Route>
        <Route path="/maps/:uuid">
          <Mapas />
        </Route>
        <Route path="/weapons/:uuid">
          <Armas />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default hot(App);
