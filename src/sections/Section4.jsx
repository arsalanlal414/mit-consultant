import React from 'react'
import Overlay from '../components/Overlay'

function Section4() {

  return (
    <section className='section4'>
        <h2>Meet our team <span className='line'></span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nisl leo odio ac donec sit tincidunt <br /> purus, amet ultrices. </p>
        <div className='card-container'>
            <div className="card">
                <img src="./images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash 1.png" alt="img" className='card-img'/>
                <Overlay />
            </div>
            <div className="card">
                <img src="./images/albert-dera-ILip77SbmOE-unsplash 1.png" alt="img" className="card-img"/>
                <Overlay />
            </div>
            <div className="card">
                <img src="./images/drew-hays-agGIKYs4mYs-unsplash 1.png" alt="img" className="card-img"/>
                <Overlay />
            </div>
        </div>
    </section>
  )
}

export default Section4