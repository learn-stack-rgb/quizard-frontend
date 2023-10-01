import React from "react";
import imgG from '../assets/IMG-20230801-WA0008-fotor-bg-remover-20230926115028.png'
import imgB from '../assets/bao.png'
import imgR from '../assets/aboutme-fotor-bg-remover-20230926181442.png'
import imgG2 from '../assets/Wiz-liz-cricket-run.png'
import logLiz from '../assets/login-liz.png'
import imgB2 from '../assets/wiz-liz-staff.png'
import './AboutUs.css'
import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
    const parentRef = useRef()
    const grahamRef = useRef()
    const baoRef = useRef()
    const raquelRef = useRef()

    useLayoutEffect(() => {
        const raquel = raquelRef.current
        const graham = grahamRef.current
        const bao = baoRef.current;

        const ctx = gsap.context(() => {
            const raqsAnimation = gsap.fromTo(raquel,
                {
                    opacity: 1,
                },
                {
                    opacity: 1,
                    rotationY: 360,
                    rotationX: 360,
                    rotation: 360,
                    duration: 1.5,
                    scrollTrigger: {
                        scroller: parentRef.current,
                        trigger: raquel,
                        // markers: true,
                        start: "top 80",
                        end: "top 50",
                        onLeaveBack: () => raqsAnimation.reverse()
                    }
                })

            const grahamsAnimation = gsap.fromTo(graham,
                {
                    x: "50vw",
                    opacity: 0,
                    scale: .5,
                },
                {   
                    scale: 1,
                    rotationY: 360,
                    rotationX: 360,
                    opacity: 1,
                    x: "0",
                    ease: "none",
                    rotation: -720,
                    scrollTrigger: {
                        scroller: parentRef.current,
                        trigger: graham,
                        // markers: true,
                        start: "top-=150 80%",
                        end: "bottom+=150 bottom",
                        scrub: true,
                       
                    }
                })

            gsap.fromTo(bao,
                {
                    x: "-50vw",
                    opacity: 0,
                    scale: .5,
                    
                },
                {
                    rotationY: 360,
                    rotationX: 360,
                    scale: 1,
                    x: 0,
                    opacity: 1,
                    rotation: 720,
                    ease: "none",
                    scrollTrigger: {
                        scroller: parentRef.current,
                        trigger: bao,
                        // markers: true,
                        start: "top-=150 80%",
                        end: "bottom 85%",
                        scrub: true,
                    }
                })
        }, parentRef)
        return () => ctx.revert()
    }, [])

    return (
        <div className="div-all-about" ref={parentRef}>
            <h1 className="about-h1">
                <span id='meet'>Meet </span>
                <span id='our'>Our </span>
                <span id='team'>Team</span>
            </h1>
            <div className="div-raquel" ref={raquelRef}>
                <h3 className="h3-r-name">Raquel King</h3>
                <h3 className="h3-r-role">Design Lead</h3>
                <h4 className="h3-r-location">Austin, TX</h4>
                <span className="spanny">
                    <img className='img-raquel' src={imgR} alt='raquel-img'/>
                    <img className='img-raquel-2' src={logLiz} alt='liz-img' />
                </span>
                <p className="p1">A full stack developer and U.S. Navy Veteran, Raquel is an amateur rapper, lover of dogs, and delights in exploring new restaurants. In her downtime, she enjoys watching documentaries. Drawn to software engineering for its creative potential, Raquel believes in diversifying tech and is dedicated to teaching others.</p>
                <p>A fun fact Raquel knows: The ice cream cone was invented in New York </p>
            </div>
            <div className="div-graham" ref={grahamRef}>
                <h3 className="h3-g-name">Graham Blundell</h3>
                <h3 className="h3-g-role">Product Manager & Project Manager</h3>
                <h4 className="h3-g-location">San Diego, CA</h4>
                <span className="spanny">
                    <img className="img-graham" src={imgG} alt='graham-img'/>
                    <img className="img-graham-2" src={imgG2} alt='liz-img' />
                </span>
                <p className="p2">A full stack web developer with a background in events, finance and insurance. Graham was introduced to coding by a friend and since then, has not looked back. Graham enjoys taking his dogs on adventures, rock climbing and playing a LOT of video games.</p>
                <p>A fun fact Graham knows: There is a volcano on Mars three times the size of Mt Everest.  </p>
            </div>
            <div className="div-bao" ref={baoRef}>
                <h3 className="h3-b-name">Bao Khanh Tran</h3>
                <h3 className="h3-b-role">Tech Lead</h3>
                <h4 className="h3-b-location">San Diego, CA</h4>
                <span className="spanny">
                    <img className="img-bao" src={imgB} alt="bao-img" />
                    <img className="img-bao-2" src={imgB2} alt="liz-img" />
                </span>
                <p className="about-p3">After serving 6 years in the US Navy as a Nuclear Operator, Bao pursued a path in web development. He likes to problem solve and share his experiences with others. His hobbies include working out and exploring new food places in San Diego.</p>
                <p>A fun fact Bao knows: "Google" originates from "googol," a term for the number 1 with 100 zeros </p>
            </div>

        </div>
    )
}

export default AboutUs