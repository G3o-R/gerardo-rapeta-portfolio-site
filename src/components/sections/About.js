import {
  AboutCardContainer,
  AboutCardWrapper,
  AboutSection,
  TextContainer,
  TextWrapper,
  Header,
} from "../../styles/AboutStyles";

export default function About() {
  return (
    <AboutSection className="about-section">
      <AboutCardWrapper className="card-wrapper">
        <AboutCardContainer className="card-container">
          <Header className="header-container">
            <h2> About me</h2>
          </Header>
          <TextWrapper className="text-wrapper">
            <TextContainer className="text-container">
              <p>
                Graduated from Flatiron School’s Software Engineering Flex
                Program. I always knew I wanted to be an engineer even when I
                was a child. Legos, Transformers, and The Matrix definitely
                nurtured that passion. My crux was that I didn’t know which
                branch of engineering best suited me, being that I wanted to
                build everything, be it planes, cars, robots, or wooden tables.
                But luckily for me almost everything requires a computer, except
                for wooden tables...
              </p>
            </TextContainer>
          </TextWrapper>
        </AboutCardContainer>
      </AboutCardWrapper>
    </AboutSection>
  );
}
