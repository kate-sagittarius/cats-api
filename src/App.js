import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import AppWrapper from './components/AppWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './Router';

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header/>
        <AppRouter/>
        <Footer/>
      </AppWrapper>
    </Router>
  );
}

export default App;
