import React from 'react'
import { useState, useEffect } from 'react'
import style from '../styles/Domain.module.css'

export default function Domain() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        setIsMobile(window.innerWidth <= 600);
    })
   const our_domains = [
    {
        'name':'Website Development',
        'desc':'At Tech Logic, we create and maintain websites, ranging from simple informational sites to complete business web applications. We utilize various technologies to ensure your online presence is effective and user-friendly.',
        'stack':'HTML, CSS, PHP, JS, MySQL, Firebase',
        'note':'Stack can be changed on client\'s request as per our availability.'
    },
     {
        'name':'Desktop Applications',
        'desc':'We develop software applications that run directly on your computer. Whether for specific business needs or general utilities, any semester projects or general student assignments, we build user-friendly desktop solutions.',
        'stack':'Python - Tkinter, Java Swing',
        'note':'Stack can be changed on client\'s request as per our availability.'
    },
    {
        'name':'General Programming',
        'desc':'Our expertise extends to writing code in various programming languages for different purposes. This includes problem-solving, student works, and building custom software components.',
        'stack':'Python, Java, C++',
        'note':'Stack can be changed on client\'s request as per our availability.'
    },
   {
        'name':'Databases',
        'desc':'We specialize in designing and managing digital databases. This involves structuring information efficiently so it can be easily stored, retrieved, and managed for your applications and systems. It also includes writing Business Queries to fetch data from databases.',
        'stack':'Mysql Workbench, PhpMyAdmin, SQL Server, PgAdmin 4',
        'note':'You can choose any of the above setup to design and implement databases'
    },
     {
        'name':'Data Analysis',
        'desc':'Using Python, we examine and interpret data to uncover trends, patterns, and valuable insights. This helps in making informed decisions and understanding complex information. This also includes generating graphs, charts and other useful visuals for ease of client.',
        'stack':'Python',
         'note':'Python is the fixed programming language for data analytics at Tech Logic.'
    },
   {
        'name':'Classical Machine Learning',
        'desc':'We build traditional Artificial Intelligence models using Python and libraries like Scikit-learn. These models learn from data to make predictions or classifications without explicit programming. Data pre-processing, Exploratory data analysis is also the part of this model building pipeline',
        'stack':'Python - Scikit learn',
         'note':'Python is the fixed programming language for Building Classical Ai models at Tech Logic.'
    },
     {
        'name':'Design Documentation',
        'desc':'We create detailed written documents that explain the design and functionality of computer science projects (excluding networking). This ensures clarity and provides a blueprint for development and understanding. This may include software architectural design documents or any other sort of technical literature',
        'stack':'Microsoft Word, Technical Writing',
        'note':'This includes any aspect of Computer Science except Networking.'
    },


]
  return (
    <div className = {style.mainDomains}>
        <h1>Our Domains</h1>
      <div className = {isMobile ? style.domainsMobile : style.domainsPc}>
          {
            our_domains.map((domainItem, index)=>{
               return  <div className = {isMobile ? style.dcardMobile : style.dcardPc}>
                    <h1>{domainItem.name}</h1>
                    <p>{domainItem.desc}</p>
                    <h2>{domainItem.stack}</h2>
                    <strong>{domainItem.note}</strong>
                    <button>Get Quote</button>
                </div>
            })
        }
      </div>
    </div>
  )
}
