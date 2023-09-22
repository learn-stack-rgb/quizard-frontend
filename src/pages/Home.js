import React from 'react';
import './Home.css'
import wizR from '../assets/WizLizRGB.png'
const Home = () => {
return (
     <div className='home-container'>
       <div className='header'>
         <h1>QUIZARD</h1>
       </div>
        <img src={wizR} className='homeImg' alt='homeImg' />
    </div>
    )
}

export default Home