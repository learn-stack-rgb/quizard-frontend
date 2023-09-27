import React from "react";
import { Routes, useNavigate } from "react-router-dom";
import {Card} from "reactstrap"
import imgG from '../assets/IMG-20230801-WA0008-fotor-bg-remover-20230926115028.png'
import imgG2 from '../assets/Wiz-liz-cricket-run.png'
import './AboutUs.css'


const AboutUs = () => {
    
    return(
        <div className="divAll">
            <h1>Meet Our Team</h1>
            <div className="divR">
                <h3>Raquel King</h3>
                <h3>Design Lead</h3>
                <h4>Austin, TX</h4>
                <img src='' />
                <p></p>
            </div>
            <div className="divG">
                <h3>Graham Blundell</h3>
                <h3>Product Manager & Project Manager</h3>
                <h4>San Diego, CA</h4>
                <span>
                    <img className="imgG" src={imgG} />
                    <img className="imgG2" src={imgG2}/>
                </span>
                <p>A full stack web developer with a history of events, finance and insurance. Grahams friend introduced him to coding, since then, he has never looked back. Graham enjoys rock climbing and playing a LOT of video games.</p>
            </div>
            <div className="divB">
                <h3>Bao Khanh Tran</h3>
                <h3>Tech Lead</h3>
                <h4>San Diego, CA</h4>
                <img src='' />
                <p></p>
            </div>
        </div>
    )
}

export default AboutUs