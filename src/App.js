import React, { useState } from 'react';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import DeckNew from './pages/DeckNew'
import CardNew from './pages/CardNew';
import mockCards from './mockCards.js'
import mockDecks from './mockDecks.js'
import mockUsers from './mockUsers.js'
import CardProtectedIndex from './pages/CardProtectedIndex.js'
import DeckProtectedIndex from './pages/DeckProtectedIndex.js'
import SignUp from './pages/SignUp.js'
import SignIn from './pages/SignIn.js'
import DeckIndex from './pages/DeckIndex'
import CardIndex from './pages/CardIndex'


const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [decks, setDecks] = useState(mockDecks)
  const [cards, setCards] = useState(mockCards)

  const login = (userInfo) => {
    console.log("login invoked")
    setCurrentUser(mockUsers[0])
  }

  const logout = () => {
    setCurrentUser(null)
  }

  const createDeck = () => {
    console.log("createDeck invoked")
  }
  const url = 'http://localhost:3000'
  const readDeck = () => {

  }
  const deleteDeck = (id) => {
    fetch(`${url}/decks/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
    .then((response) => response.json())
    .then(() => readDeck())
    .catch((errors) => console.log('delete errors', errors))
  }

  return (
    <>
      <Header currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decknew" element={<DeckNew createDeck={createDeck} currentUser={currentUser}/>} />
        <Route path="/decks" element={<DeckIndex decks={decks}/>} />
        <Route path="/decks/:deckId" element={<CardIndex cards={cards}/>} />
        {currentUser && (
          <>
            <Route path="/mydecks" element={<DeckProtectedIndex deleteDeck={deleteDeck} decks={decks} currentUser={currentUser} />} />
            <Route path={`/mydecks/:deck_id/mycards`} element={<CardProtectedIndex decks={decks} cards={cards} currentUser={currentUser}/>} />
            <Route path="/cardnew" element={<CardNew />} />
          </>
        )}
        {!currentUser && (
          <>
            <Route path="/login" element={<SignIn login={login}/>} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
