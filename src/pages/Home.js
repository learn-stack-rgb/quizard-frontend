import React, { useLayoutEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap'
import './Home.css'
import wizR from '../assets/WizLizRGB.png'


const Home = () => {
  const parent = useRef()
  const headerRef = useRef()
  const tl = useRef()
  const h1Ref = useRef()
  const h2Ref = useRef()
  const navigate = useNavigate()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({defaults: {duration : 1}})
      .from(h1Ref.current, { y: "-100%", ease: 'bounce', rotation: "-180"})
      .from(h2Ref.current, { y: "+100vh", duration: 1, ease: "back.out(1.3)"})
      .from('.homeImg', { opacity: 0, duration: 1.5}, .5)
    }, parent)
    return () => ctx.revert()
  }, [])
  
  return (
    <div className='home-container' ref={parent}>
      <div className='header' ref={headerRef}>
        <h1 ref={h1Ref}>QUIZARD</h1>
        <h2 ref={h2Ref}>Master Any Topic, One Card at a Time!</h2>
      </div>
      <img src={wizR} className='homeImg' alt='homeImg' />
      <div className='home-btns'>
        <button onClick={() => navigate("/login")}>Log In!</button>
        <button onClick={() => navigate("/signup")}>Sign Up!</button>
      </div>
    </div>
  )
}

export default Home