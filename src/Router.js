import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from './components/Main';
import Facts from './components/Facts';
import Fact from './components/Fact';
import NotFound from './components/NotFound';

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/' exact component={Main}/>
      <Route path='/facts/' exact component={Facts}/>
      <Route path='/facts/:id' component={Fact}/>
      <Route component={NotFound}/>
    </Switch>
  );
}

export default AppRouter;
