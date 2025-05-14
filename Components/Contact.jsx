import React from 'react'
import { useState, useEffect } from 'react'
import style from '../styles/Contact.module.css'

export default function Contact() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 600);
    })

    return (
        <div className={isMobile ? style.contactMobile : style.contactPc}>
            <h1>Contact</h1>
            <form action="">
                <label htmlFor="Full name">Full Name</label>
                <input type="text" placeholder='Full name' required />
                <label htmlFor="Message">Message</label>
                <textarea rows={5} name="Message" id="msg">Message here...</textarea>
                <button>Send Whatsapp</button>
                <p>If you have no whatsapp, can contact us via <a href=''>Mail</a> </p>
            </form>
        </div>
    )
}
