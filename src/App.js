import React from 'react';
import './App.css';
import Home from './components/splash/home.js';
import Info from './components/info/info.js';
import Map from './components/map/map.js';
import AppBar from './components/AppBar/MenuAppBar';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div className="container">
      <AppBar />
      <Home />
      <Info />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
