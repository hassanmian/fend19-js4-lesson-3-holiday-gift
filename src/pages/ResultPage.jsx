import React, { useContext, useEffect, useState } from 'react'
import RedirectToStartPage from '../components/RedirectToStartPage'
import ResultComponent from '../components/ResultComponent'
import { FormContext } from '../contexts/FormContext'


export default function ResultPage() {
  const { age, interest, relationship } = useContext(FormContext)
  const [isLoading, setIsLoading] = useState(true)
  const code = age + interest + relationship

  const loadingGif = "https://media.giphy.com/media/K90ckojkohXfW/giphy.gif"


  useEffect(() => {
    setTimeout( () => setIsLoading(false) , 3000);
  }, [])

  function renderIsLoading() {
    return (
      <>
        <img className="img-fluid" src={loadingGif}/>
        <p>Contacting SANTA DOT AI... </p>
      </>
    )
  }

  function renderLoaded() {
    return (
      <>
        <ResultComponent code={code} />
      </>
    )
  }

  return (
    <RedirectToStartPage>
      <div className="text-center">
        <h1>🎁 Gift Time 🎁</h1>
        <p>Lets see what you should give as a gift</p>
        {isLoading 
          ?
            renderIsLoading()
          :
            renderLoaded()
        }
        
      </div>
    </RedirectToStartPage>
  )
}
