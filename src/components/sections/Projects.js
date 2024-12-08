import { HeaderContainer, ProjectsContainer, ProjectsSection } from "../../styles/ProjectsStyles";
import { ORCCard, SaldanasGarageCard, GerardoRapetaPortfolioCard } from "../PortfolioCards";

export default function Projects(){
    return(
        <ProjectsSection>
            <HeaderContainer>
                <h2>Recent Projects</h2>
            </HeaderContainer>
            <ProjectsContainer>
                <ORCCard />
                <SaldanasGarageCard />
                <GerardoRapetaPortfolioCard />
            </ProjectsContainer>
        </ProjectsSection>
    )
}