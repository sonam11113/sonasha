import React from "react";
import "./GetInTouch.css";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const GetInTouch = () => {
    return (<section class="get-in-touch">
            <div class="get-in-touch-left">
                <span class="t1">Get in touch</span><br/>
                <p class="t2">Sed ut perspiciatis unde omnis iste natus error sit
                     voluptatem accusantium doloremque laudantium.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                     cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                     occaecat cupidatat non proident, sunt in culpa qui officia 
                     deserunt mollit anim id est laborum.</p>
                <img src={facebook} alt="facebook" />
                <img src={twitter} class="twitter" alt="twitter" />
                <img src={instagram} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
                <img src={youtube} alt="youtube" />
                <div className="links-section">
                    <ul>
                    <div>
                    <h4>Quick links</h4>
                    <li>About us</li>
                    <li>Placements</li>
                    <li>Success Stories</li>
                    </div>

                    <div>
                    <h4>Popular Courses</h4>
                    <li>MERN Stack</li>
                    <li>Java</li>
                    <li>PHP</li>
                    </div>

                    <div>
                    <h4>Resources</h4>
                    <li>Download Brochure</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                    </div>
                    </ul>
                </div>
            </div>
            <div class="get-in-touch-right">
                <form>
                    <div className="input-row">
                    <div class="email">
                        <label>Email</label>
                        <input type="email" placeholder="Enter a valid Email address" />
                    </div>

                    <div class="name">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    </div>

                    <div className="message-box">
                    <label>Message</label><br/>
                    <textarea placeholder="Enter your message."></textarea>
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
    </section>)
};
export default GetInTouch;