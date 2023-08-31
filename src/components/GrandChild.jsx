

import React from 'react'
import "./components.css"
const GrandChild = ({dollar}) => {
  return (
    <div className="grand-child">
        <p>Yeah! My grand father indirectly gave me <span>${dollar}</span></p>
        <p>Which i receive from my father </p>
    </div>
  )
}

export default GrandChild