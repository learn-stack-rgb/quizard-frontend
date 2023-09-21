import React from 'react';
import './Home.css'
import wizR from '../assets/Wiz-liz-RGB.png'

const Home = () => {
return (
    <div>
        <div>
            <h1>QUIZARD</h1>
            <img src={wizR} className='homeImg' alt='homeImg' />
        </div>
    </div>
    )
}

export default Home