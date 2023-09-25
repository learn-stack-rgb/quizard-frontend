import React from "react";
import './NotFound.css'
import snek from '../assets/snek-404.png'


const NotFound = () => {
    return (
        <div className="notfound-container">
            <img src={snek} />
            <h1>404 Even braniacs get lost sometimes</h1>
        </div>
    )
}

export default NotFound