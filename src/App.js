import { useEffect, useState } from 'react';
import './App.css';
import { FiSearch } from 'react-icons/fi'

// Sections
import Section1 from './sections/Secton1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section5 from './sections/Section5'
import Section6 from './sections/Section6'
import Section7 from './sections/Section7'
import Section8 from './sections/Section8'
import Section9 from './sections/Section9'
import Section10 from './sections/Section10'
import Section11 from './sections/Section11'

function App() {

  const [lan, setLan] = useState(false)

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling behavior
    });
  };

  return (
    <div className='app'>
      <main className="main">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <div className="up" onClick={scrollToTop}>Up</div>
      </main>
      <aside className="sidebar">
        <h2>.mit</h2>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="1" x2="12" y2="1" stroke="black" stroke-width="2"/>
          <line y1="5" x2="12" y2="5" stroke="black" stroke-width="2"/>
        </svg>
        <div className="nav">
          <div><FiSearch style={{fontSize:"15px"}}/></div>
          <p className={!lan ? "active" : ""} onClick={()=>setLan(false)}>En</p>
          <p className={lan ? "active" : ""} onClick={()=>setLan(true)}>Ru</p>
        </div>
      </aside>
    </div>
  );
}

export default App;
