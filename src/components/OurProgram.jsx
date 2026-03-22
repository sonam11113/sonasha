import React from "react";
import "./OurProgram.css"
import Card1 from "../assets/card (1).jpg"
import Card2 from "../assets/card (3).jpg"
import Card3 from "../assets/aefe2209bd40bb813babfae8f775a07d1e47d2d0.jpg"

const features = [
    {
        'title':"Web Development",
        'para':"We create modern, responsive, and SEO-friendly websites tailored to your business needs.",
        'button':"Learn More",
        'icon':Card1,
    },
    {
        'title':"App Development",
        'para':"We design and develop mobile apps that deliver smooth performance and great user experience.",
        'button':"Learn More",
        'icon':Card2,
    },
    {
        'title':"UI/UX Designing",
        'para':"We create intuitive, engaging, and visually stunning designs that enhance user experience and drive business growth.",
        'button':"Learn More",
        'icon':Card3,
    }
];

const OurProgram = () => {
    return <section class="our-prog">
        <div class ="our-program">
                <span>Our Services</span>
                <h4>Transform Your Ideas into Powerful Digital Solutions</h4>
                <p>Have a project in mind? We’d love to hear from you!</p>
            
            <div class="our-card">
                {features.map((item, index) => (
                    <div class="card-1" key={index}>
                        <img src={item.icon} />
                        <h3>{item.title}</h3>
                        <p>{item.para}</p>
                        <a>{item.button}➜ </a>   
                    </div>
                ))}
            </div>
                <button>View all Services➜</button>
        </div>
    </section>
}
export default OurProgram;