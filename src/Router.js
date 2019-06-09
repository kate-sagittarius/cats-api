import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from './components/Main';
import Facts from './components/Facts';
// import About from './components/About';

const AppRouter = () => {
  return (
    <Router>
      <Route path='/' exact component={Facts}/>
      {/* <Route path='/facts/' exact component={Facts}/>
      <Route path='/:id' component={Fact}/> */}
    </Router>
  );
}

export default AppRouter;

