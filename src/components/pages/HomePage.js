import { StyledHomePage } from "../../styles/Page_Styles/HomePageStyles";
import About from "../sections/About";
import Biography from "../sections/Biography";
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
            <Biography />
            <Footer />
        </StyledHomePage>
    )
}