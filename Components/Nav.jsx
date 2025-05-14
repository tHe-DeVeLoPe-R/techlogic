import React from 'react'
import { useState, useEffect } from 'react'
import style from '../styles/Nav.module.css'

export default function Nav() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        setIsMobile(window.innerWidth <= 600);
    })

  return (
    <div className = {isMobile ? style.navMobile : style.navPc}>
        <h1>Tech Logic.</h1>
        <ul>
           {isMobile ? null :  <li>Home</li>}
            {isMobile ? <li>Domains</li> : <li>Our Domains</li>}
            <li>Projects</li>
            <li>Mail</li>
           
        </ul>
    </div>
  )
}
