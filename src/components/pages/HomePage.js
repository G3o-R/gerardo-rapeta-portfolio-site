import { StyledHomePage } from "../../styles/Page_Styles/HomePageStyles";
import About from "../sections/About";
import Journey from "../sections/Journey";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import HeaderUpdated from "../sections/HeaderUpdated";


export default function HomePage(){
    return (
        <StyledHomePage>
            {/* <Header /> */}
            <HeaderUpdated/>
            <Projects />
            <About />
            <Skills />
            <Journey />
            <Footer />
        </StyledHomePage>
    )
}