import React from 'react'
import { BsCheck } from 'react-icons/bs'

function Plans({title, price}) {

    console.log(title, "props");
  return (
    <div className="plan">
        <header>
            <h3>{title}</h3>
            <p>This is the Basice plan</p>
        </header>
        <div className="price">
            <h2>{price}</h2>
        </div>
        <div className="details">
            <ul>
                <li>
                    <p>Branding</p>
                    <BsCheck />
                </li>
                <li>
                    <p>20 hours of consultation</p>
                    <BsCheck />
                </li>
                <li>
                    <p>15 hours if theory </p>
                    <BsCheck />
                </li>
                <li>
                    <p>Skype video call </p>
                    <BsCheck />
                </li>
                <li>
                    <p>Support 24/7</p>
                    <BsCheck />
                </li>
            </ul>
        </div>
        <div className="btn">
            <button>Choose plan</button>
        </div>
    </div>
  )
}

export default Plans