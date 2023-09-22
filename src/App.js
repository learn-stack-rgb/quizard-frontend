import React, {useState} from 'react';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import DeckIndex from './pages/DeckIndex';
import mockCards from './mockCards.js'
import mockDecks from './mockDecks.js'
import mockUsers from './mockUsers.js';
import CardIndex from './pages/CardIndex';


function App() {
  const [decks, setDecks] = useState(mockDecks)
  const [cards, setCards] = useState(mockCards)
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decks" element={<DeckIndex decks={decks}/>} />
      <Route path="/decks/:deckId" element={<CardIndex cards={cards}/>} />
     <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
