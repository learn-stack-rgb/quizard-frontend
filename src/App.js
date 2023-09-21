import React from 'react';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import DeckNew from './pages/DeckNew'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/decknew" element={<DeckNew />} />
    </Routes>
    <Footer />

    </>
  );
}

export default App;
