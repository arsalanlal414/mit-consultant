import React from 'react'

function CLientCards({image, alt}) {
  return (
    <div className="client">
        <img src={image}  alt={alt}/>
    </div>
  )
}

export default CLientCards