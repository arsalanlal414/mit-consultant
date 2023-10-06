import React, { useState } from 'react'

function Section11() {

    const [menu, setMenu] = useState("Our Company")
  return (
    <section className='section11'>
        <div className="content-container">
            <div className="content">
                <h1>Business consulting <br />agency</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient quam etiam sapien sed ultrices quis amet, diam dapibus. Quisque magna mauris nullam ut. Tristique quis aliquam, at proin volutpat mattis. Tristique iaculis faucibus cras enim ullamcorper aliquam varius ultrices. Auctor ultrices neque.</p>
                <div className='lets-chat'>
                    <div className='line'></div>
                    <p>Let’s Chat </p>
                </div>
            </div>
            <div className="image-container">
                <img src="./images/zahir-namane-OpGjTVfTMsM-unsplash 1.png" alt="last section image" />
            </div>
        </div>
        <div className="menu-bar">
            <nav>
                <ul>
                    <li onClick={()=> setMenu("About")}
                        className={menu === 'About' && 'active-menu'}
                    >About</li>
                    <li onClick={()=> setMenu("Our Company")}
                        className={menu === 'Our Company' && 'active-menu'}
                    >Our Company</li>
                    <li onClick={()=> setMenu("Price")}
                        className={menu === 'Price' && 'active-menu'}
                    >Price</li>
                    <li onClick={()=> setMenu("Feedback")}
                        className={menu === 'Feedback' && 'active-menu'}
                    >Feedback</li>
                    <li onClick={()=> setMenu("Partner")}
                        className={menu === 'Partner' && 'active-menu'}
                    >Partner</li>
                    <li onClick={()=> setMenu("Contact us")}
                        className={menu === 'Contact us' && 'active-menu'}
                    >Contact us</li>
                </ul>
            </nav>
        </div>
    </section>
  )
}

export default Section11