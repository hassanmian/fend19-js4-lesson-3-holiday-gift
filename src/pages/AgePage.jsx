import React, { useContext } from 'react'
import ButtonNext from '../components/ButtonNext'
import RadioButton from '../components/RadioButton'
import RedirectToStartPage from '../components/RedirectToStartPage'
import { FormContext } from '../contexts/FormContext'

export default function AgePage() {
  const { age, setAge } = useContext(FormContext)
  const selectorName = "ageSelector"
  const value = age
  const changeHandler = setAge

  function handleOnChange(e) {
    changeHandler(e.target.id)
  }

  return (
    <RedirectToStartPage>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Please select the persons age 🐣</h1>

            <div onChange={handleOnChange} style={{ fontSize: "2rem" }}>
              <RadioButton label="Younger than 25 👦" onChange={handleOnChange} value={age} id={"a"} name={selectorName} />

              <RadioButton label="Between 25 and 50 👩‍💼" onChange={handleOnChange} value={age} id={"b"} name={selectorName} />

              <RadioButton label="Older than 50 👵" onChange={handleOnChange} value={age} id={"c"} name={selectorName} />
            </div>

            <ButtonNext to="/interest" label={"Lets move on to the persons interests"} disabled={!value} />

          </div>
        </div>

      </div>
    </RedirectToStartPage>
  )
}
