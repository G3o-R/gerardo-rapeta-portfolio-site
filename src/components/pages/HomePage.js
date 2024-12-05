import { StyledHomePage } from "../../styles/Page_Styles/HomePageStyles";
import About from "../sections/About";
import Biography from "../sections/Biography";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";


export default function HomePage(){
    const height = (window.innerHeight)
    const width = (window.innerWidth)

    return (
        <StyledHomePage>
            <Header />
            <Projects />
            <div>
                <h1>height: {height}</h1>
                <h1>width: {width}</h1>
            </div>
            <About />
            <Skills />
            <Biography />
            <Footer />
        </StyledHomePage>
    )
}