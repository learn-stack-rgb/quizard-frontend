import React, { useState, useEffect } from 'react';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import DeckNew from './pages/DeckNew'
import CardNew from './pages/CardNew'
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

  useEffect(() => {
    readDeck()
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }
  }, [])

  const url = 'http://localhost:3000'

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch(error => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch('http://localhost:3000/signup', {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
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
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      method: "GET",
    })
      .then(payload => {
        setCurrentUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
      })
      .catch(error => console.log("logout errors: ", error))
  }

  const createDeck = (newDeck) => {
    fetch(`${url}/decks`, {
      body: JSON.stringify(newDeck),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(() => readDeck())
      .catch(errors => console.log("createDeck errors: ", errors))
  }

  const createCard = (newCard, deck_id) => {
    fetch(`${url}/decks/${deck_id}/cards`, {
      body: JSON.stringify(newCard),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .catch(errors => console.log("createCard errors: ", errors))
  }

  const readDeck = () => {
    fetch(`${url}/decks`)
      .then(response => response.json())
      .then(payload => {
        setDecks(payload)
      })
      .catch(error => console.log(error))
  }

  const readCard = (deck_id) => {
    fetch(`http://localhost:3000/decks/${deck_id}/cards`)
      .then(response => response.json())
      .then(payload => {
        setCards(payload)
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

  const deleteCard = (deck_id, card_id) => {
    fetch(`${url}/decks/${deck_id}/cards/${card_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => readCard(deck_id))
      .catch(errors => console.log("delete errors:", errors))
  }

  const updateDeck = (updatedDeck, deckId) => {
    fetch(`${url}/decks/${deckId}`, {
      body: JSON.stringify(updatedDeck),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => response.json)
      .then(() => readDeck())
      .catch(errors => console.log("update deck error: ", errors))
  }

  const updateCard = (updatedCard, deckId, cardId ) => {
    fetch(`${url}/decks/${deckId}/cards/${cardId}`,{
      body: JSON.stringify(updatedCard),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => response.json)
      .then(() => readCard(deckId))
      .catch(errors => console.log("update card error: ", errors))
  }

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks" element={<DeckIndex decks={decks} />} />
        <Route path="/decks/:deck_id" element={<CardIndex decks={decks} cards={cards} readCard={readCard} />} />
        {currentUser && (
          <>
            <Route path="/decks" element={<DeckIndex decks={decks} />} />
            <Route path="/mydecks" element={<DeckProtectedIndex deleteDeck={deleteDeck} decks={decks} currentUser={currentUser} />} />
            <Route path={`/mydecks/:deck_id`} element={<CardProtectedIndex decks={decks} cards={cards} currentUser={currentUser} readCard={readCard} deleteCard={deleteCard} />} />
            <Route path="/decknew" element={<DeckNew createDeck={createDeck} currentUser={currentUser} />} />
            <Route path="/mydecks/:deck_id/cardnew" element={<CardNew createCard={createCard} decks={decks} />} />
            <Route path={`/mydecks/:deck_id/edit`} element={<DeckEdit decks={decks} currentUser={currentUser} updateDeck={updateDeck} />} />
            <Route path="/mydecks/:deck_id/:card_id/cardedit" element={<CardEdit decks={decks} cards={cards} updateCard={updateCard} />} />
          </>
        )}
        {!currentUser && (
          <>
            <Route path="/login" element={<SignIn login={login} />} />
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
