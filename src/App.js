import React, { useState, useEffect } from 'react';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css';
import { Route, Routes} from 'react-router-dom'
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
import DeckEdit from './pages/DeckEdit';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [decks, setDecks] = useState([])
  const [cards, setCards] = useState([])

  const updateCard = (updatedCard, cardId) => {
    const updatedCards = cards.map(card => card.id === cardId ? updatedCard : card)
    setCards(updatedCards)
  }

  useEffect(() => {
    readDeck()
  }, [])
  
  const login = (userInfo) => {
    console.log("login invoked")
    setCurrentUser(mockUsers[0])
  }

  const signup = (userInfo) => {
    fetch('http://localhost:3000/signup', {
      body: JSON.stringify(userInfo), 
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      setCurrentUser(payload)
    })
    .catch((error) => console.log("signup errors: ", error))
  }

  const logout = () => {
    setCurrentUser(null)
  }

  const createDeck = () => {
    console.log("createDeck invoked")
  }
  const url = 'http://localhost:3000'

  const readDeck = () => {
    fetch(`${url}/decks`)
    .then(response => response.json())
    .then(payload => {
      setDecks(payload)
    })
    .catch(error => console.log(error))
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

  const updateDeck = (deck, id) => {
    console.log("update invoked")
  }

  return (
    <>
      <Header currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decknew" element={<DeckNew createDeck={createDeck} currentUser={currentUser}/>} />
        <Route path="/decks" element={<DeckIndex decks={decks}/>} />
        <Route path="/decks/:deck_id" element={<CardIndex decks={decks} cards={cards}/>} />
        <Route path="cardedit/:card_id" element={<CardEdit cards={cards} updateCard={updateCard} />} />
        {currentUser && (
          <>
            <Route path="/decks" element={<DeckIndex decks={decks}/>} />
            <Route path="/mydecks" element={<DeckProtectedIndex deleteDeck={deleteDeck} decks={decks} currentUser={currentUser} />} />
            <Route path={`/mydecks/:deck_id`} element={<CardProtectedIndex decks={decks} cards={cards} currentUser={currentUser}/>} />
            <Route path="/cardnew" element={<CardNew />} />
            <Route path={`/mydecks/:deck_id/edit`} element={<DeckEdit decks={decks} currentUser={currentUser} updateDeck={updateDeck}/>} />
          </>
        )}
        {!currentUser && (
          <>
            <Route path="/login" element={<SignIn login={login}/>} />
            <Route path="/signup" element={<SignUp signup={signup} />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
