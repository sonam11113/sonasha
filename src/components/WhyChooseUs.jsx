import React from "react";
import "./WhyChooseUs.css";
import teamImage from "../assets/team.jpg";
import Icon1 from "../assets/cd984f8929c004191d5201554bae51f024d80f75.png"
import Icon2 from "../assets/6637d4541140c4941722088c513d7c7a2d9cd65b.png"
import Icon3 from "../assets/60153c33fdaacb903cf541e8da46848686312a7d.png"
import Icon4 from "../assets/a7edd5a824ab789e7b3501f14f93ff3da3ad5aa4.png"
import Icon5 from "../assets/60153c33fdaacb903cf541e8da46848686312a7d.png"
import Icon6 from "../assets/c972ac392127edbc2cef78cca2e1f5a3e6401407.png"

const features = [
  {
    title: "Industry Expert Trainers",
    desc: "Learn from professionals with 10+ years of real-world experience",
    icon: Icon1,
  },
  {
    title: "Small Batch Size",
    desc: "Limited students per batch for personalized attention",
    icon: Icon2,
  },
  {
    title: "Placement Support",
    desc: "Dedicated placement cell with tie-ups with companies",
    icon: Icon3,
  },
  {
    title: "Flexible Timing",
    desc: "Weekend and weekday batches available",
    icon: Icon4,
  },
  {
    title: "Real Projects",
    desc: "Work on real-world projects and build portfolio",
    icon: Icon5,
  },
  {
    title: "Certification",
    desc: "Get certified and boost your career",
    icon: Icon6,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">

      <div className="section-header">
        <span className="badge">Why choose us</span>
        <h2>What Makes Us Different</h2>
        <p>
          We don't just teach, we transform careers with our unique approach
        </p>
      </div>

      <div className="why-container">

        {/* Left Image */}
        <div className="why-image">
          <img src={teamImage} alt="team working" />
        </div>

        {/* Right Cards */}
        <div className="why-cards">
          {features.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon"><img className="icon" src={item.icon} /></div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;