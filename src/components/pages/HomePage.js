import { StyledHomePage } from "../../styles/Page_Styles/HomePageStyles";

import HeaderUpdated from "../sections/HeaderUpdated";
import ContentSection from "../sections/ContentSection";

export default function HomePage(){
    return (
        <StyledHomePage>
            {/* <Header /> */}
            <HeaderUpdated/>
            {/* <Projects /> */}
            <ContentSection />
            {/* <About /> */}
            {/* <Skills /> */}
            {/* <Journey /> */}
            {/* <Footer /> */}
        </StyledHomePage>
    )
}