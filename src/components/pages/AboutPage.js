import {
  About,
  AboutMeContainer,
  AboutMeWrapper,
  EducationContainer,
  EducationWrapper,
  HeaderContainer,
  HeaderWrapper,
  LanguagesColumnContainer,
  PlaceNTime,
  School,
  TechnicalSkillsContainer,
  TechnicalSkillsWrapper,
} from "../../styles/PageStyles/AboutPageStyles";

export default function AboutPage() {
  return (
    <About>
      <HeaderWrapper>
        <HeaderContainer className="About">
          {" "}
          <h1>About</h1>
        </HeaderContainer>
      </HeaderWrapper>
      <AboutMeWrapper>
        <AboutMeContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AboutMeContainer>
      </AboutMeWrapper>
      <HeaderWrapper>
        <HeaderContainer className="Education">
          <h1>Education</h1>
        </HeaderContainer>
      </HeaderWrapper>
      <EducationWrapper>
        <EducationContainer>
          <School>
            <h1>Flatiron School New York, New York</h1>
            <p>
              Full Stack Web Development, Ruby on Rails, and JavaScript program.
            </p>
          </School>
          <PlaceNTime>
            <p className="location">New York, NY</p>
            <p className="date">09/2022 - 10/2023</p>
          </PlaceNTime>
        </EducationContainer>
      </EducationWrapper>
      <HeaderWrapper>
        <HeaderContainer className="Skills">
          {" "}
          <h1>Skills</h1>
        </HeaderContainer>
      </HeaderWrapper>
      <TechnicalSkillsWrapper>
        <TechnicalSkillsContainer>
          <LanguagesColumnContainer>
            {/* svgs would be here like JS Ruby Python etc */}
            JavaScript (ES6), React, Next.js, HML, CSS, Ruby on Rails, Postgres,
            MySql, NodeJS Exposure to: Python, Django
          </LanguagesColumnContainer>
        </TechnicalSkillsContainer>
      </TechnicalSkillsWrapper>
    </About>
  );
}
