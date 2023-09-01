import { useState } from 'react'
import Form from './components/Form'
import CardList from './components/CardList'

function App() {
  const [cards, setCards] = useState([])

  const addNewCard = (card) => {
    setCards([...cards, card])
  }

  return (
    <div>
      <h1 className='pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900'>
        Search a GitHub User
      </h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )  // onSubmit={addNewCard} - passing a method to add a new card to the list of cards
}    // cards={cards} - passing a new array of cards that concatenates the old card's data, and the new card

export default App
