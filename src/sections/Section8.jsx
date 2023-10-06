import React from 'react'
import CLientCards from '../components/CLientCards'

function Section8() {
  return (
    <section className='section8'>
        <h2>Our clients</h2>
        <div className='clients'>
            <CLientCards image="./images/microsoft_PNG17.png" alt="microsoft logo" />
            <CLientCards image="./images/download (1).png" alt="amazon logo" />
            <CLientCards image="./images/download.png" alt="google logo" />
            <CLientCards image="./images/PNGPIX-COM-IBM-Logo-PNG-Transparent.png" alt="ibm logo" />
        </div>
    </section>
  )
}

export default Section8