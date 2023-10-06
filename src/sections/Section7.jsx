import React from 'react'

import { BsStarFill } from 'react-icons/bs'

function Section7() {
  return (
    <section className='section7'>
        <div className="customer-reviews">
            <h2>Customer reviews </h2>
            <p className='para-custom'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing</p>
        </div>
        <div className="reviews">
            <div className="review">
                <div className="customer">
                    <img src="./images/maaz-ijaz-xKn9Udjublw-unsplash 1.png" alt="" />
                    <div className="customer-container">
                        <div className='customer-detail'>
                            <h3>SHIKHAR </h3>
                            <p className="role">C.E.O of company</p>
                        </div>
                        
                        <div className="rating">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                    </div>
                </div>
                <p className='my-review para-custom '>Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Nisl leo odio ac donec sit Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Nisl leo odio ac donec sit</p>
            </div>
            <div className="review">
                <div className="customer">
                    <img src="./images/maaz-ijaz-xKn9Udjublw-unsplash 1.png" alt="" />
                    <div className="customer-container">
                        <div className='customer-detail'>
                            <h3>Ram Ford </h3>
                            <p className="role">C.E.O of company</p>
                        </div>
                        
                        <div className="rating">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                    </div>
                </div>
                <p className='my-review para-custom'>Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Nisl leo odio ac donec sit Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Nisl leo odio ac donec sit</p>
            </div>
            
        </div>
    </section>
  )
}

export default Section7