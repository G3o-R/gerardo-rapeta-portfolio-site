import { StyledHomePage } from "../../styles/Page_Styles/HomePageStyles";
import About from "../About";
import Biography from "../Biography";
import Footer from "../Footer";
import Header from "../Header";
import Projects from "../Projects";
import Skills from "../Skills";


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