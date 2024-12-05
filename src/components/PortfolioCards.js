import {
  BackFace,
  Card,
  FrontFace,
  MainCardContainer,
  ImageContainer,
  ImageWrapper,
  TextContainer,
  LinksContainer,
} from "../styles/PortfolioCardsStyles";
import ORCFront from "../images/ORCFront.png";
import SalGarFront from "../images/SalGarFront.jpg";
import GeoRapetaPortfolio from "../images/GeoRapetaPortfolio.jpg"
import { useState } from "react";

export function ORCCard() {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <MainCardContainer className="main-container" onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
      <Card className={`card ${isHovering ? "active" : ""}`}>
        <FrontFace className="front">
          <ImageWrapper>
            <ImageContainer>
              <img src={ORCFront} alt="OxRiver Creation page" />
            </ImageContainer>
          </ImageWrapper>
          <TextContainer className="front">
            <p>OxRiver Creations</p>
          </TextContainer>
        </FrontFace>
        <BackFace className="back">
          <TextContainer className="back">
            <p>
              A three page website to advertise products for{" "}
              <strong>OxRiver Creations</strong> crafts shows. Still in the
              template phase, until they can provide photos and proper text.
            </p>
          </TextContainer>
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
        </BackFace>
      </Card>
    </MainCardContainer>
  );
}

export function SaldanasGarageCard() {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <MainCardContainer className="main-container" onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
      <Card className={`card ${isHovering ? "active" : ""}`}>
        <FrontFace className="front">
          <ImageWrapper>
            <ImageContainer>
              <img src={SalGarFront} alt="Saldanas Garage page" />
            </ImageContainer>
          </ImageWrapper>
          <TextContainer className="front">
            <p>Saldanas Garage</p>
          </TextContainer>
        </FrontFace>
        <BackFace className="back">
          <TextContainer className="back">
            <p>
              A fairly simple single page website that I made as a favor for
              tinting my windows. Also in the template
              phase until he writes something for the about section but I might
              just write it for him at this point.
            </p>
          </TextContainer>
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
        </BackFace>
      </Card>
    </MainCardContainer>
  );
}

export function GerardoRapetaPortfolioCard() {
  const [isHovering, setIsHovering] = useState(false)

  function onSamePageClick() {
    alert("you're already here and I'll make this do something funny later")
  }

  return (
    <MainCardContainer className="main-container" onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
      <Card className={`card ${isHovering ? "active" : ""}`}>
        <FrontFace className="front">
          <ImageWrapper>
            <ImageContainer>
              <img src={GeoRapetaPortfolio} alt="Gerardo Rapeta" />
            </ImageContainer>
          </ImageWrapper>
          <TextContainer className="front">
            <p>Literally this website</p>
          </TextContainer>
        </FrontFace>
        <BackFace className="back">
          <TextContainer className="back">
            <p>
              Not gonna lie I'm very proud of this one purely because I designed
              it in Figma having never touched it before. It's also the fastest one I built since I didn't have to wait on anyones approval, photos or proper text.
            </p>
          </TextContainer>
          <LinksContainer>
            <div
              onClick={onSamePageClick}
            >
              Netlify
            </div>
            <a
              href="https://github.com/G3o-R/gerardo-rapeta-portfolio-site"
              target="_blank"
              rel="noreferrer"
            >
              Git Repo
            </a>
          </LinksContainer>
        </BackFace>
      </Card>
    </MainCardContainer>
  );
}
