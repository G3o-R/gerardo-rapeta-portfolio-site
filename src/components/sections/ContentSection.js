import {
    ButtonsContainer,
    ButtonsWrapper,
  ContentContainer,
  ImageContainer,
  ImageWrapper,
  InfoCardContainer,
  InfoCardWrapper,
  OverlayInfo,
  StyledSection,
  SubHeader,
  Text,
} from "../../styles/ContentSectionStyles";
import ORCFront from "../../images/ORCFront.avif";
import SalGarFront from "../../images/SalGarFront.jpg";
import GeoRapetaPortfolio from "../../images/GeoRapetaPortfolio.jpg"
import FlatironCert from "../../images/FlatironCertImage.png"


export default function ContentSection() {
  return (
    <StyledSection className="content-section">
      <ContentContainer classname="content-container">
        <InfoCardWrapper className="info-card-wrapper about-me">
          <InfoCardContainer classname="info-card-container">
            <SubHeader>About Me</SubHeader>
            <Text className="about-me">
              Graduated from Flatiron School’s Software Engineering Flex
              Program. I always knew I wanted to be an engineer even when I was
              a child. Legos, Transformers, and The Matrix definitely nurtured
              that passion. My crux was that I didn’t know which branch of
              engineering best suited me, being that I wanted to build
              everything, be it planes, cars, robots, or wooden tables. But
              luckily for me almost everything requires a computer, except for
              wooden tables...
            </Text>
          </InfoCardContainer>
        </InfoCardWrapper>
        <InfoCardWrapper className="info-card-wrapper flatiron-cert">
          <InfoCardContainer classname="info-card-container">
            <ImageWrapper className="image-wrapper flatiron-cert">
                <ImageContainer className="image-container">
                    <img src={FlatironCert} alt="" />
                </ImageContainer>
            </ImageWrapper>
          </InfoCardContainer>
        </InfoCardWrapper>
        <InfoCardWrapper className="info-card-wrapper portfolio-project" id="1">
          <InfoCardContainer classname="info-card-container">
            <ImageWrapper className="image-wrapper">
                <ImageContainer className="image-container">
                    <img src={SalGarFront} alt="" />
                    <OverlayInfo className="overlay">
                        <Text className="project-name">
                            Saldanas Garage
                        </Text>
                    </OverlayInfo>
                </ImageContainer>
            </ImageWrapper>
            <ButtonsWrapper>
                <ButtonsContainer>
                    button here button here
                </ButtonsContainer>
            </ButtonsWrapper>
          </InfoCardContainer>
        </InfoCardWrapper>
        <InfoCardWrapper className="info-card-wrapper portfolio-project" id="2">
          <InfoCardContainer classname="info-card-container">
            <ImageWrapper className="image-wrapper">
                <ImageContainer className="image-container">
                    <img src={ORCFront} alt="" />
                    <OverlayInfo className="overlay">
                        <Text className="project-name">
                            OxRiver Creations
                        </Text>
                    </OverlayInfo>
                </ImageContainer>
            </ImageWrapper>
            <ButtonsWrapper>
                <ButtonsContainer>
                    button here button here
                </ButtonsContainer>
            </ButtonsWrapper>
          </InfoCardContainer>
        </InfoCardWrapper>
        <InfoCardWrapper className="info-card-wrapper portfolio-project" id="3">
          <InfoCardContainer className="info-card-container">
            <ImageWrapper className="image-wrapper">
                <ImageContainer className="image-container">
                    <img src={GeoRapetaPortfolio} alt="" />
                    <OverlayInfo className="overlay">
                        <Text className="project-name">
                            Literally This Website Except I redesigned it
                        </Text>
                    </OverlayInfo>
                </ImageContainer>
            </ImageWrapper>
            <ButtonsWrapper>
                <ButtonsContainer>
                    button here button here
                </ButtonsContainer>
            </ButtonsWrapper>
          </InfoCardContainer>
        </InfoCardWrapper>
      </ContentContainer>
    </StyledSection>
  );
}
