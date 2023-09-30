import React from 'react'
import './Footer.css'
import rgb from '../assets/stack-rgb.png'

const Footer = () => {
    return(
        <>
        <div className='footer-container'>
            <span className='footer-content-container'>
                <a>2023 Quizard brought to you by <img src={rgb} /> @LEARN academy
                </a>
            </span>
        </div>
        </>
    )
}

export default Footer