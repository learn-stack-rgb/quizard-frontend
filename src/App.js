import React, { useState } from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import DeckNew from './pages/DeckNew'
import CardNew from './pages/CardNew'
import mockCards from './mockCards.js'
import mockDecks from './mockDecks.js'
import mockUsers from './mockUsers.js'
import CardProtectedIndex from './pages/CardProtectedIndex.js'
import DeckProtectedIndex from './pages/DeckProtectedIndex.js'
import SignUp from './pages/SignUp.js'
import SignIn from './pages/SignIn.js'
import CardEdit from './pages/CardEdit'
import DeckIndex from './pages/DeckIndex'
import CardIndex from './pages/CardIndex'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [decks, setDecks] = useState(mockDecks)
  const [cards, setCards] = useState(mockCards)

  const updateCard = (updatedCard, cardId) => {
    const updatedCards = cards.map(card => card.id === cardId ? updatedCard : card)
    setCards(updatedCards)
  }

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

  return (
    <>
      <Header currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decknew" element={<DeckNew createDeck={createDeck} currentUser={currentUser}/>} />
        <Route path="/decks" element={<DeckIndex decks={decks}/>} />
        <Route path="/decks/:deckId/:cardId" element={<CardIndex cards={cards} />} />
        <Route path="mydecks/cardedit" element={<CardEdit cards={cards} updateCard={updateCard} />} />
        {currentUser && (
          <>
            <Route path="/mydecks" element={<DeckProtectedIndex decks={decks} currentUser={currentUser} />} />
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

export default App
