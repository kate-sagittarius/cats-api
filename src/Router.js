import React from 'react';
import {Route} from 'react-router-dom';

import Main from './components/Main';
import Facts from './components/Facts';
import Fact from './components/Fact';

const AppRouter = () => {
  return (
    <div>
      <Route path='/' exact component={Main}/>
      <Route path='/facts/' exact component={Facts}/>
      <Route path='/facts/:id' component={Fact}/>
    </div>
  );
}

export default AppRouter;
