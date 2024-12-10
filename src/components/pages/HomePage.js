import { StyledHomePage } from "../../styles/Page_Styles/HomePageStyles";
import About from "../sections/About";
import Journey from "../sections/Journey";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";


export default function HomePage(){
    return (
        <StyledHomePage>
            <Header />
            <Projects />
            <About />
            <Skills />
            <Journey />
            <Footer />
            <p>height: {window.innerHeight}</p>
            <p>width: {window.innerWidth}</p>
        </StyledHomePage>
    )
}