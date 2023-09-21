import React from 'react'
import './Footer.css'
import rgb from '../assets/stack-rgb.png'

const Footer = () => {
    return(
        <>
        <div>
            <p>2023 Quizard</p>
            <p>Brought to you by </p><img src={rgb} />
        </div>
        </>
    )
}

export default Footer