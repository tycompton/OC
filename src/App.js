import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Home from './components/splash/home.js';
import Info from './components/info/info.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
