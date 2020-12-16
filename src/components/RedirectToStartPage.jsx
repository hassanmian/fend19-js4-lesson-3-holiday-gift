import React, {useContext} from 'react'
import { Redirect } from 'react-router-dom'
import { FormContext } from '../contexts/FormContext'

export default function RedirectToStartPage({children}) {
  const {correctStarted} = useContext(FormContext)
  return (
    <div>
      {correctStarted ? children : <Redirect to="/" />}
    </div>
  )
}
