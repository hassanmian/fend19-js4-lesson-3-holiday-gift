import React from 'react'
import { GiftAI } from '../data/GiftAI'

export default function ResultComponent({code}) {

  const loadedGif = "https://media.giphy.com/media/l0HlTJY5owTDq1jKo/giphy.gif"
  return (
    <div>
      <img className="img-fluid" src={loadedGif} />
      <h3 className="mt-5">You should buy: <br /> {GiftAI.calculate(code)}</h3>
    </div>
  )
}
