import React from 'react'
import { BsFacebook, BsTwitter, BsGithub} from 'react-icons/bs'

function Overlay() {
  return (
    <div className="overlay">
        <p className='name'>Rustam raz</p>
        <p className='role'>Associated Manager </p>
        <p className='institute'>MIT Instuited</p>
        <div className='social'>
            <BsFacebook />
            <BsTwitter />
            <BsGithub />
        </div>
    </div>
  )
}

export default Overlay