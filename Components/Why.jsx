import React from 'react'
import { useState, useEffect } from 'react'
import logo from '../public/images/logobr.png'
import style from '../styles/Why.module.css'

export default function Why() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        setIsMobile(window.innerWidth <=600 );
    })
  return (
    <div className = {isMobile? style.whyMobile: style.whyPc}>
        <h1>Why Tech Logic</h1>
        <img src={logo.src} alt="" />
        {isMobile ? <p>Choose Tech Logic for a seamless and empowered project experience. We go beyond just delivering solutions by offering dedicated meeting support to ensure your voice is heard every step of the way. Benefit from our comprehensive expertise across multiple critical domains – including development, analysis, design documentation, and software documentation – all conveniently managed under one roof.</p>: <p>Choose Tech Logic for a seamless and empowered project experience. We go beyond just delivering solutions by offering dedicated meeting support to ensure your voice is heard every step of the way. Benefit from our comprehensive expertise across multiple critical domains – including development, analysis, design documentation, and software documentation – all conveniently managed under one roof. And because your satisfaction is paramount, we embrace revisions (if any), giving you greater control over the final outcome.</p>}
         <button>Domains</button>
         <br />
    </div>
  )
}
