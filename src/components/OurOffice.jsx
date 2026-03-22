import React from "react";
import "./OurOffice.css";
import location from "../assets/5f2fce96a04cb760ed4f73afa1551a4227cb4048.png";
import clock from "../assets/c5486bf9828b2ab537c6f37134898fd5c3cfe92e.png";
import emailBox from "../assets/a8094ba3fb34451b1046fc01b9ce6452b5436320.png";
import phone from "../assets/53f7eba6fc35bd7bb57fb8f5f464c130e1d480e7.png";

const features =[
    {
        'title':"Our Office",
        'para':"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        'icon':location,
    },
    {
        'title':"Phone number",
        'para':"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        'icon':phone,
    },
    {
        'title':"Email",
        'para':"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        'icon':emailBox,
    },
    {
        'title':"Opening hours",
        'para':"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        'icon':clock,
    }
]

const OurOffice = () => {
    return <section class="our-office-section">
        <div class="our-office">
            <div class="office-card">
                {features.map((item, index) => (
                <div class="office-card-1" key={index}>
                    <img src={item.icon} />
                    <h4>{item.title}</h4>
                    <p>{item.para}</p>
                </div>
                ))}
            </div>
        </div>
    </section>
}
export default OurOffice;