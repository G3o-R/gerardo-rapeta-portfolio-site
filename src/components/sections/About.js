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
    <AboutSection>
      <AboutCardWrapper>
        <AboutCardContainer>
          <Header>
            <h1> About me</h1>
          </Header>
          <TextWrapper>
            <TextContainer>
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
