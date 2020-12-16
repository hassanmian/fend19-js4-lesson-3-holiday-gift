import React, { useContext } from 'react'
import ButtonNext from '../components/ButtonNext'
import RadioButton from '../components/RadioButton'
import RedirectToStartPage from '../components/RedirectToStartPage'
import { FormContext } from '../contexts/FormContext'

export default function RelationshipPage() {
  const { relationship, setRelationship } = useContext(FormContext)
  const selectorName = "relationshipSelector"
  const value = relationship
  const changeHandler = setRelationship

  function handleOnChange(e) {
    changeHandler(e.target.id)
  }

  return (
    <RedirectToStartPage>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>What is your relationship with the person 🧡?</h1>

            <div onChange={handleOnChange} style={{ fontSize: "2rem" }}>
              <RadioButton label="Parent 👩‍👦" value={value} onChange={handleOnChange} id={"a"} name={selectorName} />

              <RadioButton label="Sibling 👩‍👩‍👦‍👦" value={value} onChange={handleOnChange} id={"b"} name={selectorName} />

              <RadioButton label="Other 👯‍♂️" value={value} onChange={handleOnChange} id={"c"} name={selectorName} />
            </div>

            <ButtonNext to="/result" label={"Lets see your result"} disabled={!value} />

          </div>
        </div>

      </div>
    </RedirectToStartPage>
  )
}
