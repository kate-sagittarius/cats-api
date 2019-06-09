import React from 'react';

import AppWrapper from './components/AppWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router';

function App() {
  return (
    <AppWrapper>
      <Header/>
      <Router/>
      <Footer/>
    </AppWrapper>
  );
}

export default App;
