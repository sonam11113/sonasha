import React from "react";
import "./HeroSection1.css";
import heroImg from "../assets/hero-1.png"

const HeroSection1 =({variant ="gradient"}) => {
    return (
        <div className={`hero-section1-container ${variant}`}>
            <img src={heroImg} alt="hero illustration" />
        </div>
    )
}

export default HeroSection1;