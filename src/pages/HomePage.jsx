import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { FormContext } from '../contexts/FormContext'

const imageSrc = "https://images.unsplash.com/photo-1512909006721-3d6018887383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80"

export default function HomePage() {
  const {setCorrectStarted} = useContext(FormContext)

  useEffect(() => {
    setCorrectStarted(true)
  }, [])

  return (
    <div className="container">
      <div className="col-md-12">
        <img className="img-fluid" src={imageSrc}/>
      </div>
      <div className="col-md-12 pt-3">
        <h1>
          Welcome to Holiday Gift Generator. 
        </h1>
        <p>
          In the spirit of the holidays, we would like to help you find a gift for your loved ones.
        </p>
        <p>You will be able to choose age, interest and relationship for the person you want to generate a gift for.</p>
      </div>
      <div className="col-md-12">
        <Link to="/age" className="p-3 btn btn-block btn-primary">
          🎉 Click here to continue 🎉
        </Link>
      </div>
    </div>
  )
}
