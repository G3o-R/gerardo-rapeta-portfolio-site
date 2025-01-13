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

export default function ContentSection() {
  return (
    <StyledSection className="content-section">
      <ContentContainer classname="content-container">
        <InfoCardWrapper className="info-card-wrapper about-me">
          <InfoCardContainer classname="info-card-container">
            <SubHeader>About Me</SubHeader>
            <Text>
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
            <ImageWrapper>
                <ImageContainer>
                    <img src="" alt="" />
                </ImageContainer>
            </ImageWrapper>
          </InfoCardContainer>
        </InfoCardWrapper>
        <InfoCardWrapper className="info-card-wrapper project1">
          <InfoCardContainer classname="info-card-container">
            <ImageWrapper>
                <ImageContainer>
                    <img src="" alt="" />
                    <OverlayInfo>
                        <Text>
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
        <InfoCardWrapper className="info-card-wrapper project2">
          <InfoCardContainer classname="info-card-container">
            <ImageWrapper>
                <ImageContainer>
                    <img src="" alt="" />
                    <OverlayInfo>
                        <Text>
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
        <InfoCardWrapper className="info-card-wrapper project3">
          <InfoCardContainer classname="info-card-container">
            <ImageWrapper>
                <ImageContainer>
                    <img src="" alt="" />
                    <OverlayInfo>
                        <Text>
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
