import React from 'react'

function Section9() {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <section className='section9'>
        <div className='image-container'>
            <img src="./images/john-amachaab-xIH6XLSc9JM-unsplash 1.png" alt="contact image" />
            <div className="overlay"></div>
        </div>
        <div className="contact-form">
            <h3>Contact us to disuss your <br /> project with us </h3>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nisl leo odio ac donec sit tincidunt <br /> purus, amet ultrices. </p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Subject'/>
                <div className='portion'>
                    <input type="text" placeholder='Phone NUmber'/>
                    <input type="text" placeholder='Email Address'/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Section9