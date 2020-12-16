import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonNext({to, label, disabled}) {
  return (
    <Link className={`mt-5 p-5 btn btn-block btn-secondary ${disabled ? "disabled" : ""}`} style={{fontSize: "3rem"}} to={to}>
      {disabled 
        ? 
        "Please pick an alternative to continue 👆" 
        : 
        <>{label} 👉</>
      }
    </Link>
  )
}
