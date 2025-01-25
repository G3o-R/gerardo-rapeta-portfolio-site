import { StyledHomePage } from "../../styles/Page_Styles/HomePageStyles";

import HeaderUpdated from "../sections/HeaderUpdated";
import ContentSection from "../sections/ContentSection";
import Journey from "../sections/Journey";
import Footer from "../sections/Footer";
import ServicesSection from "../sections/ServicesSection";
import CallToAction from "../sections/CallToAction";

export default function HomePage(){
    return (
        <StyledHomePage>
            <HeaderUpdated/>
            <ContentSection />
            <Journey />
            <ServicesSection />
            <CallToAction />
            <Footer />
        </StyledHomePage>
    )
}