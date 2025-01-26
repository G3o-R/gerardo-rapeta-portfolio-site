import {
  FooterContainer,
  FooterWrapper,
  ImageContainer,
  ImageWrapper,
  InfoContainer,
} from "../../styles/FooterStyles";
import ProfilePic from "../../images/GeoRapetaPortfolioPic.avif"

export default function Footer() {
    return (
      <FooterWrapper>
        <FooterContainer>
          <ImageWrapper>
            <ImageContainer>
              <img
                src={ProfilePic}
                loading="lazy"
                alt="Gerardo Rapeta- Web Developer"
              />
            </ImageContainer>
          </ImageWrapper>
          <InfoContainer>
            <h1 className="title">Gerardo “Geo” Rapeta Jr -Web Developer</h1>
            <ul className="contact-location">
              <li>Greater Phoenix Area</li>
              <li>
                <a href="mailto:geo.rapeta@gmail.com" target="_blank">geo.rapeta@gmail.com</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/g3o-r/" target="_blank">Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/G3o-R" target="_blank">GitHub</a>
              </li>
            </ul>
            <p style={{marginBottom: 0}}>I make cool stuff</p>
            <p style={{marginTop:0}}>Built & designed by Gerardo Rapeta</p>
          </InfoContainer>
        </FooterContainer>
      </FooterWrapper>
    );
  }
  
