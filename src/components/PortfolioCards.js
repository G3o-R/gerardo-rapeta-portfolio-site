import {
  ContentContainer,
  ImageContainer,
  ImageWrapper,
  InfoCardContainer,
  InfoCardWrapper,
  OverlayInfo,
  StyledSection,
  SubHeader,
  Text,
  LinksContainer,
} from "../styles/ContentSectionStyles";
import ORCFront from "../images/ORCFront.avif";
import SalGarFront from "../images/SalGarFront.jpg";
import GeoRapetaPortfolio from "../images/GeoRapetaPortfolio.jpg";
import { useState } from "react";

export function ORCCard() {
  return (
    <InfoCardWrapper className="info-card-wrapper portfolio-project" id="2">
      <InfoCardContainer classname="info-card-container">
        <ImageWrapper className="image-wrapper">
          <ImageContainer className="image-container">
            <img src={ORCFront} alt="" />
            <OverlayInfo className="overlay">
              <Text className="project-name">OxRiver Creations</Text>
            </OverlayInfo>
          </ImageContainer>
        </ImageWrapper>
        <LinksContainer>
          <a
            href="https://oxrivercreations.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          <a
            href="https://github.com/G3o-R/oxriver-creations-frontend"
            target="_blank"
            rel="noreferrer"
          >
            Git Repo
          </a>
        </LinksContainer>
      </InfoCardContainer>
    </InfoCardWrapper>
  );
}

export function SaldanasGarageCard() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <InfoCardWrapper className="info-card-wrapper portfolio-project" id="1">
      <InfoCardContainer classname="info-card-container">
        <ImageWrapper className="image-wrapper">
          <ImageContainer className="image-container">
            <img src={SalGarFront} alt="" />
            <OverlayInfo className="overlay">
              <Text className="project-name">Saldanas Garage</Text>
            </OverlayInfo>
          </ImageContainer>
        </ImageWrapper>
        <LinksContainer>
          <a
            href="https://saldanas-garage.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          <a
            href="https://github.com/G3o-R/saldanas-garage-page"
            target="_blank"
            rel="noreferrer"
          >
            Git Repo
          </a>
        </LinksContainer>
      </InfoCardContainer>
    </InfoCardWrapper>
  );
}

export function GerardoRapetaPortfolioCard() {
  const [isHovering, setIsHovering] = useState(false);

  function onSamePageClick() {
    alert("you're already here -_-");
  }

  return (
    <InfoCardWrapper className="info-card-wrapper portfolio-project" id="3">
      <InfoCardContainer className="info-card-container">
        <ImageWrapper className="image-wrapper">
          <ImageContainer className="image-container">
            <img src={GeoRapetaPortfolio} alt="" />
            <OverlayInfo className="overlay">
              <Text className="project-name">
                Literally This Website Except I Redesigned It
              </Text>
            </OverlayInfo>
          </ImageContainer>
        </ImageWrapper>
        <LinksContainer>
          <div onClick={onSamePageClick}>Netlify</div>
          <a
            href="https://github.com/G3o-R/gerardo-rapeta-portfolio-site"
            target="_blank"
            rel="noreferrer"
          >
            Git Repo
          </a>
        </LinksContainer>
      </InfoCardContainer>
    </InfoCardWrapper>
  );
}
