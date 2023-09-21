import React, { useState } from 'react';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import mockCards from './mockCards.js'
import mockDecks from './mockDecks.js'
import mockUsers from './mockUsers.js'
import CardProtectedIndex from './pages/CardProtectedIndex.js'
import DeckProtectedIndex from './pages/DeckProtectedIndex.js'



const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [decks, setDecks] = useState(mockDecks)
  const [cards, setCards] = useState(mockCards)

  
  return (
    <>
      <Header currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        {currentUser && (
          <>
            <Route path="/mydecks" element={<DeckProtectedIndex decks={decks} currentUser={currentUser} />} />

            <Route path={`/mydecks/:deck_id/mycards`} element={<CardProtectedIndex decks={decks} cards={cards} currentUser={currentUser}/>} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
