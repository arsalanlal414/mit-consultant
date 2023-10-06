import React from 'react'
import { BsCheck } from 'react-icons/bs'
import Plans from '../components/Plans'

function Section5() {
  return (
    <section className='section5'>
        <h2>Price Plan</h2>
        <p>Choose the best plan for you </p>

        <div className="plan-container">
            <Plans title="Basic plan" price="299 $"/>
            <Plans title="Standart  plan " price="599 $"/>
            <Plans title="Premium plan " price="999 $"/>
        </div>
            
    </section>
  )
}

export default Section5