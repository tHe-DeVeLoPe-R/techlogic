import React from 'react'
import { useState, useEffect } from 'react'
import style from '../styles/Nav.module.css'
import { useRouter } from 'next/router';

export default function Nav() {
    const [isMobile, setIsMobile] = useState(false);
    const route = useRouter();
    useEffect(()=>{
        setIsMobile(window.innerWidth <= 600);
    })

  return (
    <div className = {isMobile ? style.navMobile : style.navPc}>
        <h1>Tech Logic.</h1>
        <ul>
         <li onClick={()=>{route.push('/')}}>Home</li>
            {isMobile ? <li onClick={()=>{route.push('/domains')}}>Domains</li> : <li onClick={()=>{route.push('/domains')}}>Our Domains</li>}
            <li onClick={()=>{route.push('/projects')}}>Projects</li>
            <li><a href="mailto:thetechlogicofficial@gmail.com">Mail</a></li>
           
        </ul>
    </div>
  )
}
