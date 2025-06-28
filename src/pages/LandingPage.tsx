import './LandingPage.scss';
import profileImage from '../assets/images/profile/eve-profile-2.png'
import { FaAngleDown } from "react-icons/fa";
// import { FaAngleUp } from "react-icons/fa";
import eveImage from '../assets/images/profile/eve.png'

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
        <div className='hero-section' id='home'>
            <img className="profile-img float-img" src={profileImage}></img>
            <h1 className="hero-desc welcome">hi.... welcome</h1>
            <h1 className="hero-name">I am Evelyn Levina Diva</h1>
            <h1 className="hero-desc">A Web Developer</h1>
        </div>

        <FaAngleDown className='scroll-to-down' 
                     onClick={() => {document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        }/> 

        
        {/* <FaAngleUp className='scroll' /> */}


        <div className='about-section' id='about'>
          <img className='about-img' src={eveImage}/>
          <div className='about-details-wrapper'>
            <p className='about-title'>Hello, <span>I'm eve</span></p>
            <p className='about-desc'>I'm a web developer based in Indonesia. I studied Computer Science 
              at UCSI University in Kuala Lumpur, with a focus on Mobile Computing and Networking. I’ve 
              worked for almost a year building and maintaining websites, turning ideas into real, usable 
              products. I love picking up new tech and seeing what I can create with it.This is actually 
              the third portfolio I’ve built, this time to sharpen my skills in React.js and SCSS.<br /><br />

              Outside of coding, I enjoy diving into design, playing around with UI/UX ideas, and 
              experimenting with little side projects to keep growing. I’m always up for learning 
              something new and taking on challenges that push me further.
            </p>
          </div>
          
        </div>

    </div>
  );
};

export default LandingPage;