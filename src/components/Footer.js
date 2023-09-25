import React from 'react'
import './Footer.css'
import rgb from '../assets/stack-rgb.png'

const Footer = () => {
    return(
        <>
        <div className='footer-container'>
            <a>2023 Quizard brought to you by </a>
            <img src={rgb} />
        </div>
        </>
    )
}

export default Footer