import './HomePage.css';
import NavBar from './Home/components/NavBar';
import About from './Home/components/About';
import Education from './Home/components/Education';
import Projects from './Home/components/Projects';
import ContactMe from './Home/components/ContactMe';
export default function HomePage() {
    return (
        <div className="HomePage">
            <NavBar/>
            {/* <About/>
            <Education/>
            <Projects/>*/}
            <ContactMe/>
        </div>
    );
}
