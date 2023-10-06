import React from 'react'
import Sec10Cards from '../components/Sec10Cards'

function Section10() {
  return (
    <section className='section10'>
        <h2>Latest articles </h2>
        <div className="cards">
            <Sec10Cards image="./images/jose-vazquez-Q5RBHz9cu1A-unsplash 1.png" text="Lorem ipsum dolor sit amet, consectetur"/>
            <Sec10Cards image="./images/john-schnobrich-2FPjlAyMQTA-unsplash 1.png" text="Lorem ipsum dolor sit amet, consectetur "/>
            <Sec10Cards image="./images/christina-wocintechchat-com-rg1y72eKw6o-unsplash 1.png" text="Lorem ipsum dolor sit amet, consectetur " />
        </div>
    </section>
  )
}

export default Section10