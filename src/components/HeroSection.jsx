import React from "react";
import "./HeroSection.css";
import Logo from "../assets/logo.png";
import heroImg from "../assets/hero.png";
import contact from "../assets/9a41857f3dc8f42976a54744fd264a682597c56c.png"

const HeroSection = () => {
  return (
    <div className="hero-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Sonasha" />
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About us</li>
          <li>Why Choose Us</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Career</li>
        </ul>

        <button className="enroll-btn">Contact Us
          <img src={contact}/>
        </button>
      </nav>


      {/* Hero Section */}
      <div className="hero-content">

        <div className="left">
          <h1>
            Welcome to <br />
            <span>Sonasha Technologies</span>
          </h1>

          <p className="tagline">
            Transforming Ideas into <span>Technology.</span>
          </p>

          <p className="description">
            At Sonasha Technologies, We design and develop high-performance websites and apps that help your business grow faster.
          </p>

          <div className="hero-buttons">
            <button className="course-btn">Explore Courses</button>
            <button className="consult-btn">Get Free Consultation</button>
          </div>

        </div>

        <div className="right">
          <img src={heroImg} alt="hero illustration" />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;