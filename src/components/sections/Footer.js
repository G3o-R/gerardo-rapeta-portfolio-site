import {
  FooterContainer,
  FooterWrapper,
  ImageContainer,
  ImageWrapper,
  InfoContainer,
} from "../../styles/FooterStyles";
import ProfilePic from "../../images/ProfilePic.jpg"

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
                <a href="mailto:geo.rapeta@gmail.com">geo.rapeta@gmail.com</a>
              </li>
            </ul>
            <p>“My ingenuity knows no limits, and my creativity doesn’t know what those limits are”</p>
          </InfoContainer>
        </FooterContainer>
      </FooterWrapper>
    );
  }
  
