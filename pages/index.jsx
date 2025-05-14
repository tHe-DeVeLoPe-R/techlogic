import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Nav from '@/Components/Nav'
import Why from '@/Components/Why'
import React from 'react'

export default function index() {
  return (
    <div>
        <Nav/>
        <Header/>
        <Why/>
        <Contact/>
        <Footer/>
    </div>
  )
}
