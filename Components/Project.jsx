import React from 'react'
import { useState, useEffect } from 'react';
import style from '../styles/Project.module.css';
import shbn from '../public/images/shbn.png'
import medicost from '../public/images/medicost.png'
import gym from '../public/images/gym.jpg'
import chatbridge from '../public/images/chatbridge.jpeg'
import stock from '../public/images/stock.png'
import ticket from '../public/images/ticket.jpeg'
import traffic from '../public/images/traffic.png'
import fraud from '../public/images/fraud.jpg'
import priority from '../public/images/priority.jpeg'
import campus from '../public/images/campus.png'
import assisstant from '../public/images/assisstant.png'
import epms from '../public/images/epms.png'


export default function Project() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 600);
    })
    const our_projects = [
        {
            'title': 'Health Bridge - Website',
            'domain': 'Website Development',
            'desc': 'The Saudi HealthBridge Network (SHBN) is a comprehensive web-based system developed to enhance healthcare transparency and connectivity across Saudi Arabia. Built using HTML, CSS, PHP, MySQL, and JavaScript, the platform allows community members to easily view hospital capacity and load status, submit complaints, register and review hospitals, and stay informed about upcoming health-related events. The admin dashboard enables authorized personnel to manage hospital listings, monitor feedback, and schedule awareness events. Designed with a secure and responsive architecture, as per client requirements the system is hosted in a local XAMPP environment, ensuring smooth functionality during development and testing phases. SHBN bridges the communication gap between healthcare institutions and the public, promoting timely care and informed decisions.',
            'stack': 'HTML, CSS, PHP, JS, MYSQL',
            'image': shbn

        },
        {
            'title': 'Medicost - Website',
            'domain': 'Website Development',
            'desc': 'This project is a smart prescription cost estimator built using Next.js for the frontend and Express/Node.js for the backend, seamlessly integrated and deployed live on Vercel. It allows users to input their prescribed medicines and receive real-time price estimates based on a curated database, helping them avoid unexpected costs at the pharmacy. Designed with a mobile-first approach and a clean UI, the application emphasizes usability and reliability while ensuring user-friendly interactions and dynamic responses.',
            'stack': 'JavaScript - NextJs, ExpressJs, NodeJs',
            'image': medicost

        },
        {
            'title': 'EliteFit - Website',
            'domain': 'Website Development',
            'desc': 'This Fitness Web Application, hosted on InfinityFree cloud platform, is a comprehensive online solution designed to help users achieve their health and wellness goals through personalized workout and diet planning. It allows users to register, set fitness targets, receive customized guidance based on their preferences and experience, and share feedback about their progress. Administrators can manage user data, collect feedback, and monitor user goals through a secure backend. With a user-friendly interface and reliable cloud hosting, the platform ensures accessibility, performance, and a positive user experience for health-conscious individuals.',
            'stack': 'HTML, CSS, PHP, JS, MYSQL',
            'image': gym

        },
        {
            'title': 'ChatBridge - Website',
            'domain': 'Website Development',
            'desc': 'ChatBridge is a modern web application built using Next.js and deployed on Vercel, designed to simplify WhatsApp communication by allowing users to message unsaved numbers effortlessly. Supporting all country codes, the app enables global connectivity without the need to save contacts, making it ideal for quick chats with clients, event organizers, or new connections. With a clean, user-friendly interface and seamless integration with WhatsApp, ChatBridge ensures a smooth experience while respecting user privacy by not storing any personal data or chat history.',
            'stack': 'JavaScript - NextJs',
            'image': chatbridge

        },
        {
            'title': 'Stock Analyser System',
            'domain': 'Desktop Application',
            'desc': 'This desktop application, developed using Python and BreezyPythonGUI, provides an intuitive interface for Dow Jones Industrial Index stock analysis. It allows users to load historical stock data from a CSV file, select a specific stock (RIC code), and define a custom date range to visualize stock performance through interactive line plots. The app also includes features to calculate return and standard deviation for the selected stock and date range, with all results displayed in user-friendly pop-up messages. Robust input validation ensures correct date formats and logical date ranges, making it a reliable analytical tool for traders and analysts.',
            'stack': 'Python - Tkinter',
            'image': stock

        },
        {
            'title': 'Ticket Booking System',
            'domain': 'Desktop Application',
            'desc': 'Our cutting-edge ticket booking system, developed using Python for its robust backend logic and data management, offers a seamless experience for motorsport enthusiasts to purchase tickets online. Leveraging efficient data structures to manage user accounts, race events, and booking details, the system allows fans to easily browse various ticket types like single-race passes and weekend packages, select their preferred events and quantities, and securely finalize purchases. This platform ensures real-time availability updates and provides users with a comprehensive view of their purchase history, enhancing fan engagement and streamlining the entire ticket acquisition process.',
            'stack': 'Python - Tkinter',
            'image': ticket

        },
        {
            'title': 'Classical Traffic Prediction Ai Model',
            'domain': 'Classical Machine Learning, Data Analysis',
            'desc': '  Our intelligent traffic prediction system employs a comprehensive pipeline, starting with data acquisition and rigorous data processing, including cleaning and transformation. We then conduct exploratory data analysis (EDA) to understand traffic patterns and engineer relevant features. Utilizing Python and scikit-learn, we proceed with model training, selecting and optimizing appropriate machine learning algorithms based on EDA insights. Model evaluation is crucial, where we assess performance on unseen data using relevant metrics. Finally, the validated model is deployed for real-time prediction, providing valuable forecasts for improved traffic management and enhanced transportation efficiency.',
            'stack': 'Python - Scikit Learn',
            'image': traffic

        },
        {
            'title': 'Fraud Transaction Detection',
            'domain': 'Desktop App, Ai/ML',
            'desc': 'This AI/ML project is a fraud detection system designed to identify potentially fraudulent financial transactions using advanced machine learning techniques. Leveraging real-world transaction datasets, the system employs data preprocessing, feature engineering, and model training to classify transactions with high accuracy. Built using the CRISP-DM methodology, the solution integrates predictive analytics into a user-friendly web application developed with Flask. It allows seamless interaction through a web interface where users can input transaction details and receive real-time fraud probability scores. Designed for scalability and integration into enterprise systems, this project showcases how AI can enhance digital security and decision-making in financial domains.',
            'stack': 'Python - Scikit Learn, Flask',
            'image': fraud

        },
        {
            'title': 'Priority Sheduling System',
            'domain': 'General Programming',
            'desc': 'This project involved developing a console-based application using Java to simulate a task scheduling algorithm. The core functionality centers around managing and prioritizing tasks, in this case, customer orders in a cafeteria setting. The application takes task details as input, including a unique code, descriptive name, customer type (Student, Faculty, VIP), arrival time, burst time (processing time), and priority. It then processes these tasks using the Priority Scheduling algorithm and outputs the execution order, performance metrics (like waiting and turnaround times), and overall system performance. This project demonstrates fundamental Java programming concepts, including data structures (like lists and queues), input/output handling, and algorithm implementation.',
            'stack': 'Java  - Console based',
            'image': priority

        },
        {
            'title': 'Campus Sustainability Dashboard',
            'domain': 'General Programming, Desktop App',
            'desc': 'This project, Campus Sustainability Dashboard, is a general programming project designed as a desktop application (web-ready or integrable) that simulates real-time tracking of environmental metrics across various campus departments. It generates a synthetic dataset of 3,000 records covering areas like energy usage, waste management, water consumption, transportation emissions, and green initiatives. The purpose is to provide a data foundation for building interactive dashboards or analytics platforms that promote sustainability and informed decision-making. The dataset includes values such as energy used, waste generated, CO₂ emissions, and efficiency scores, making it ideal for visualizations and policy analysis.',
            'stack': 'Python',
            'image': campus

        },

        {
            'title': 'Role of AI Powered Code Assisstants',
            'domain': 'Technical Writing',
            'desc': 'This project focuses on the integration of AI-powered code assistants, such as GitHub Copilot, into Agile software development workflows to enhance coding efficiency, accuracy, and team productivity. The technical design involves embedding these tools within common development environments (e.g., VS Code) used by Agile teams, allowing for real-time code suggestions, documentation generation, and error reduction during sprint cycles. The system tracks metrics like sprint velocity, code quality, and bug frequency to evaluate impact. Additionally, user feedback and team adoption are analyzed to refine integration strategies, ensuring the solution aligns with Agile principles while leveraging the latest advancements in AI-assisted development.',
            'stack': 'Design and Documentation',
            'image': assisstant

        },
        {
            'title': 'EPMS - Architectural Report',
            'domain': 'Technical Writing',
            'desc': 'This Design and Architecture Analysis Document presents a comprehensive evaluation of the Electronic Patient Management System (EPMS) from a security and architectural standpoint. It begins with an in-depth analysis of the current microservices-based cloud architecture, identifying critical design flaws affecting security, performance, scalability, and maintainability. Through structured threat modeling using the STRIDE framework, key risks such as spoofing, data tampering, and denial of service were assessed and prioritized. A set of targeted security enhancements were then proposed, including the adoption of OAuth 2.0, multi-factor authentication, service mesh implementation, and robust access control models. The document outlines a phased implementation roadmap to integrate these measures with minimal disruption, backed by best practices like OWASP ASVS testing, red-teaming, and CI/CD security pipelines.',
            'stack': 'Design Document',
            'image': epms

        },




    ]

    return (
        <div className = {style.mainprojects}>
        <h1>Our Projects</h1>
      <div className = {isMobile ? style.projectsMobile : style.projectsPc}>
          {
            our_projects.map((projectItem, index)=>{
               return  <div className = {isMobile ? style.pcardMobile : style.pcardPc}>
                    <h1 className>{projectItem.title}</h1>
                    <img src={projectItem.image.src} alt="img" />
                    <strong>{projectItem.domain}</strong>
                    <p>{projectItem.desc}</p>
                    <strong>{projectItem.stack}</strong>
                    
                </div>
            })
        }
      </div>
      <small>We have huge collection of projects. Want to <a href="">CHAT</a> with us ? </small>
    </div>
    )
}
