import {
  ContentContainer,
  ContentWrapper,
  HeaderContainer,
  HeaderWrapper,
  ImageContainer,
  ImageWrapper,
  LanguagesContainer,
  LanguagesWrapper,
  TextBoxContainer,
  TextBoxWrapper,
} from "../../styles/HeaderStylesUpdated";
import ProfilePic from "../../images/GeoRapetaPortfolioPic.avif";
import PythonLogo from "../../images/Python-logo-notext.svg.png";
import { ReactComponent as JavaScriptLogoSVG } from "../../images/JavaScript_logo.svg";
import RubyLogo from "../../images/Ruby_logo.svg.png";
import { ReactComponent as ReactLogoSVG } from "../../images/React-icon.svg";
import SQL_Logo from "../../images/SQL_Logo.png";

export default function HeaderUpdated() {
  return (
    <HeaderWrapper className="header-wrapper">
      <HeaderContainer className="header-container">
        <ContentWrapper className="content-wrapper">
          <ContentContainer className="content-container">
            <ImageWrapper className="image-wrapper">
              <ImageContainer className="image-container">
                <img
                  src={ProfilePic}
                  loading="lazy"
                  alt="Your personal handsome developer Geo"
                />
              </ImageContainer>
            </ImageWrapper>
            <TextBoxWrapper className="text-box-wrapper">
              <TextBoxContainer className="text-box-container">
                <h1 className="name">Gerardo Rapeta JR</h1>
                <h1 className="position">-Software Engineer</h1>
              </TextBoxContainer>
              <LanguagesWrapper className="languages-wrapper">
                <LanguagesContainer className="languages-container">
                  <JavaScriptLogoSVG className="code-language"/>
                  <ReactLogoSVG className="code-language"/>
                  <img src={RubyLogo} alt="Ruby Logo" className="code-language"/>
                  <img src={PythonLogo} alt="Python Logo" className="code-language"/>
                  <img src={SQL_Logo} alt="SQL Logo" className="code-language"/>
                </LanguagesContainer>
              </LanguagesWrapper>
            </TextBoxWrapper>
          </ContentContainer>
        </ContentWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
