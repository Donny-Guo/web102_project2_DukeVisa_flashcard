import "./App.css"
import Flashcard from "./components/Flashcard"
import { useState } from "react"
import { data } from "./data/data"

const App = () => {
  const [index, setIndex] = useState(0) // used for changing the card color
  const [isFlipped, setIsFlipped] = useState(false)
  const [card, setCard] = useState(data[0])

  const handleNext = () => {
    setIsFlipped(false)
    setIndex(prev => (prev + 1) % 5)
    setTimeout(() => {
      setCard(data[Math.floor(Math.random() * data.length)])
    }, 200)
  }

  const handleFlip = () => {
    setIsFlipped(prev => !prev)
  }

  return (
    <main>
      <h1>Your Ultimate Duke Visa Guide!</h1>

      <h3>
        Swipe through everything you need to know about your visa
      </h3>

      <p>
        Number of cards: {data.length}
      </p>

      <Flashcard {...card} index={index} isFlipped={isFlipped} handleFlip={handleFlip} />

      <button onClick={handleNext}>
        &rarr;
      </button>
    </main>
  )
}

export default App