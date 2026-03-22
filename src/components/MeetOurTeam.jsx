import React from "react";
import "./MeetOurTeam.css";
import pic1 from "../assets/f69e19a8baea8cac45192d39b0e2ea476429161b.jpg";
import pic2 from "../assets/ebff7c50fb8bc57c803a3fb3aaf98adf32ac43ad.jpg";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const features = [
    {
        'title':"Shadab khan",
        'para':"Founder & MD",
        'subtitle':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        'icon':pic2
    },
    {
        'title':"Sonam Sharma",
        'para':"Co-Founder & CEO",
        'subtitle':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        'icon':pic1
    },
    
]

const MeetOurTeam = () => {
    return <section class="our-team-section">
        <div class="our-team">
            <span>Meet our team</span>
            <p>"Digital Warriors. We build the future, one line of code at a time." or
                 "The Dream Team: Turning ideas into reality, collaboratively</p>
        </div>
        <div class="card-team">
            {features.map((item, index) => (
            <div class="card-team-1" key={index}>
                <img class="team-img" src={item.icon} />
                <h4>{item.title}</h4>
                <h6>{item.para}</h6>
                <span>{item.subtitle}</span><br/>
                <img src={facebook} alt="facebook" />               
                <img src={linkedin} alt="linkedin" />
                <img src={instagram} alt="instagram" />
            </div>
            ))}
        </div>
    </section>
}
export default MeetOurTeam;