import { HeaderContainer, ProjectsContainer, ProjectsSection } from "../../styles/ProjectsStyles";
import { ORCCard, SaldanasGarageCard, GerardoRapetaPortfolioCard } from "../PortfolioCards";

export default function Projects(){
    return(
        <ProjectsSection className="projects-section">
            <HeaderContainer className="header-container">
                <h2>Recent Projects</h2>
            </HeaderContainer>
            <ProjectsContainer className="projects-container">
                <ORCCard />
                <SaldanasGarageCard />
                <GerardoRapetaPortfolioCard />
            </ProjectsContainer>
        </ProjectsSection>
    )
}