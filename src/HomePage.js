import './HomePage.css';
import NavBar from './Home/components/NavBar';
import About from './Home/components/About';
import Education from './Home/components/Education';
import Projects from './Home/components/Projects';
import ContactMe from './Home/components/ContactMe';
import SocialSticker from './Home/components/SocialSticker';
export default function HomePage() {
    return (
        <div className="Global-HomePage">
            <NavBar/>
            <SocialSticker/>
            <About/>
            <Education/>
            <Projects/>
            <ContactMe/>
        </div>
    );
}
