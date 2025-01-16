import { StyledHomePage } from "../../styles/Page_Styles/HomePageStyles";

import HeaderUpdated from "../sections/HeaderUpdated";
import ContentSection from "../sections/ContentSection";
import Journey from "../sections/Journey";

export default function HomePage(){
    return (
        <StyledHomePage>
            {/* <Header /> */}
            <HeaderUpdated/>
            {/* <Projects /> */}
            <ContentSection />
            <Journey />
            {/* <About /> */}
            {/* <Skills /> */}
            {/* <Footer /> */}
        </StyledHomePage>
    )
}