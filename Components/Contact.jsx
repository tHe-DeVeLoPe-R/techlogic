import React from 'react'
import { useState, useEffect } from 'react'
import style from '../styles/Contact.module.css'

export default function Contact() {
    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState({
    fullName: '',
    message: '',
  });
    useEffect(() => {
        setIsMobile(window.innerWidth <= 600);
    })
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
   const sendMessage = (event) => {
    event.preventDefault();

    const whatsappMessage = `Name: ${formData.fullName}\nMessage: ${formData.message}`;
    const whatsappURL = `https://wa.me/${+923494034106}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp in a new tab or window
    window.open(whatsappURL, '_blank');
  };
    return (
        <div className={isMobile ? style.contactMobile : style.contactPc}>
            <h1>Contact</h1>
            <form onSubmit={sendMessage}>
                <label htmlFor="Full name">Full Name</label>
                <input value={formData.fullName}
          onChange={handleChange} type="text" placeholder='Full name' name='fullName' required />
                <label htmlFor="Message">Message</label>
                <textarea
          rows={5}
          name="message"
          id="msg"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message here..."
        ></textarea>
                <button type='submit'>Send Whatsapp</button>
                <p>If you have no whatsapp, can contact us via <a href=''>Mail</a> </p>
            </form>
        </div>
    )
}
