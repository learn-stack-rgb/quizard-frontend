import React from 'react';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Home />
       <NotFound />
    </Routes>
    <Footer />

    </>
  );
}

export default App;
