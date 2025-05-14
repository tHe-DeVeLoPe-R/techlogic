import React from 'react'
import style from '../styles/Header.module.css'
import { useState, useEffect } from 'react'

export default function Header() {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    setIsMobile(window.innerWidth <= 600);
  })
  return (
    <div className = {isMobile ? style.headerMobile : style.headerPc}>
        <h1>
            Tech Logic
        </h1>
        <p>
            We architect intelligent systems and provide comprehensive technology solutions across design, documentation, coding, and analysis. Our logical approach ensures clarity, efficiency, and tangible results for your projects.
        </p>
        <button>Get Quote</button>
    </div>
  )
}
