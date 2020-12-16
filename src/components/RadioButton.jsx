import React from 'react'

export default function RadioButton({label, id, name, value, onChange}) {
  return (
    <div className="form-check pt-5">
      <input className="form-check-input pt-1" onChange={onChange} defaultChecked={value === id} style={{marginTop: "1rem"}} type="radio" name={name} id={id} />
      <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
  )
}
