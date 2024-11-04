import {
  About,
  AboutMeContainer,
  AboutMeWrapper,
  EducationContainer,
  EducationWrapper,
  HeaderContainer,
  HeaderWrapper,
  LanguagesColumnContainer,
  TechnicalSkillsContainer,
  TechnicalSkillsWrapper,
} from "../../styles/PageStyles/AboutPageStyles";

export default function AboutPage() {
  return (
    <About>
      <HeaderWrapper>
        <HeaderContainer className="About"> <h1>About</h1></HeaderContainer>
      </HeaderWrapper>
      <AboutMeWrapper>
        <AboutMeContainer>
          <p> lots and lots of text here abouit yourself</p>
        </AboutMeContainer>
      </AboutMeWrapper>
      <HeaderWrapper>
        <HeaderContainer className="Education"> <h1>Education</h1></HeaderContainer>
      </HeaderWrapper>
      <EducationWrapper>
        <EducationContainer>
            <h1>Flatiron School New York, New York</h1>
            <p>text from resume here</p>
        </EducationContainer>
      </EducationWrapper>
      <HeaderWrapper>
        <HeaderContainer className="Skills"> <h1>Skills</h1></HeaderContainer>
      </HeaderWrapper>
      <TechnicalSkillsWrapper>
        <TechnicalSkillsContainer>
            <LanguagesColumnContainer> 
                {/* svgs would be here like JS Ruby Python etc */}
            </LanguagesColumnContainer>
            {/* here you would write other skills */}
        </TechnicalSkillsContainer>
      </TechnicalSkillsWrapper>
    </About>
  );
}
