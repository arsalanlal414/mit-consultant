import React from 'react'

function Sec10Cards({text, image}) {
  return (
    <div className="card">
        <img src={image} alt="" />
        <p>{text} </p>
    </div>
  )
}

export default Sec10Cards