import React, { useContext } from 'react'
import ButtonNext from '../components/ButtonNext'
import RadioButton from '../components/RadioButton'
import RedirectToStartPage from '../components/RedirectToStartPage'
import { FormContext } from '../contexts/FormContext'

export default function InterestPage() {
    const { interest, setInterest } = useContext(FormContext)
    const selectorName = "interestSelector"
    const value = interest
    const changeHandler = setInterest

    function handleOnChange(e) {
        changeHandler(e.target.id)
    }

    return (
        <RedirectToStartPage>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>A little information about the persons interests 🤓</h1>

                        <div style={{ fontSize: "2rem" }}>
                            <RadioButton label="Fashion 😍" value={value} onChange={handleOnChange} id={"a"} name={selectorName} />

                            <RadioButton label="Tech 👩‍💻" value={value} onChange={handleOnChange} id={"b"} name={selectorName} />

                            <RadioButton label="Craft 🔨" value={value} onChange={handleOnChange} id={"c"} name={selectorName} />
                        </div>

                        <ButtonNext to="/relationship" label={"Lets move on to your relationship with the person"} disabled={!value} />

                    </div>
                </div>

            </div>
        </RedirectToStartPage>
    )
}
