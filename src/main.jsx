import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import HeroSection from './components/HeroSection.jsx'
import HeroSection1 from './components/HeroSection1.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import OurProgram from './components/OurProgram.jsx'
import MeetOurTeam from './components/MeetOurTeam.jsx'
import OurOffice  from './components/OurOffice.jsx'
import GetInTouch from './components/GetInTouch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HeroSection />
    <HeroSection1 />
    <WhyChooseUs />
    <OurProgram />
    <MeetOurTeam />
    <OurOffice />
    <GetInTouch />
    <HeroSection1 variant="white"/>
  </StrictMode>,
)
