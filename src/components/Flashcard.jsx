import clsx from "clsx"

const Flashcard = ({index, front, back, isFlipped, handleFlip}) => {

  const className = clsx(
    "flashcard",
    `color-${index}`,
    {flipped: isFlipped},
  )

  return (
    <div 
      className={className}
      onClick={handleFlip}
    >
      <div className="flashcard-front">
        {front}
      </div>
      <div className="flashcard-back">
        {back}
      </div>
    </div>
  )
}

export default Flashcard