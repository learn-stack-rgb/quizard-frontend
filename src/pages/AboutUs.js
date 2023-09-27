import React from "react";
import { Routes, useNavigate } from "react-router-dom";
import imgG from '../assets/IMG-20230801-WA0008-fotor-bg-remover-20230926115028.png'
import imgB from '../assets/bao.png'
import imgR from '../assets/aboutme-fotor-bg-remover-20230926181442.png'
import imgG2 from '../assets/Wiz-liz-cricket-run.png'
import logLiz from '../assets/login-liz.png'
import imgB2 from '../assets/wiz-liz-staff.png'
import './AboutUs.css'


const AboutUs = () => {
    
    return(
        <div className="divAll">
            <h1 className="h11">Meet Our Team</h1>
            <div className="divR">
                <h3 className="h33">Raquel King</h3>
                <h3 className="h33">Design Lead</h3>
                <h4 className="h44">Austin, TX</h4>
                <span>
                    <img className='imgR' src={imgR} />
                    <img className='imgR2' src={logLiz} />
                </span>
                <p className="p1">A full stack developer and U.S. Navy Veteran, Raquel is an amateur rapper, lover of dogs, and delights in exploring new restaurants. In her downtime, she enjoys watching documentaries. Drawn to software engineering for its creative potential, Raquel believes in diversifying tech and is dedicated to teaching others.</p>
                <p>A fun fact Raquel knows:  </p>
            </div>
            <div className="divG">
                <h3 className="h33">Graham Blundell</h3>
                <h3 className="h33">Product Manager & Project Manager</h3>
                <h4 className="h44">San Diego, CA</h4>
                <span>
                    <img className="imgG" src={imgG} />
                    <img className="imgG2" src={imgG2}/>
                </span>
                <p className="p2">A full stack web developer with a background in events, finance and insurance. Graham was introduced to coding by a friend and since then, has not looked back. Graham enjoys taking his dogs on adventures, rock climbing and playing a LOT of video games.</p>
                <p>A fun fact Graham knows:  </p>
            </div>
            <div className="divB">
                <h3 className="h33">Bao Khanh Tran</h3>
                <h3 className="h33">Tech Lead</h3>
                <h4 className="h44">San Diego, CA</h4>
                <span>
                    <img className="imgB" src={imgB} />
                    <img className="imgB2" src={imgB2}/>
                </span>
                <p className="p3">After serving 6 years in the US Navy as a Nuclear Operator, Bao pursued a path in web development. He likes to problem solve and share his experiences with others. His hobbies include working out and exploring new food places in San Diego.</p>
                <p>A fun fact Bao knows:  </p>
            </div>
        </div>
    )
}

export default AboutUs