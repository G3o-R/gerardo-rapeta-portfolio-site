import {
  GeneralContainer,
  GeneralWrapper,
  HeaderContainer,
  HeaderWrapper,
  ImageContainer,
  ImageWrapper,
  TextBoxContainer,
  TextBoxWrapper,
} from "../../styles/HeaderStyles";
import ProfilePic from "../../images/ProfilePic.jpg"

export default function Header() {
  return (
    <HeaderWrapper className="header-wrapper">
      <HeaderContainer className="header-container">
        <GeneralWrapper className="wrapper pfp">
          <GeneralContainer className="container pfp">
            <ImageWrapper>
              <ImageContainer>
                <img src={ProfilePic} alt="" />
                </ImageContainer>
            </ImageWrapper>
          </GeneralContainer>
        </GeneralWrapper>
        <GeneralWrapper className="wrapper text">
          <GeneralContainer className="container text">
            <TextBoxWrapper className="text-box-wrapper">
              <TextBoxContainer className="text-box-container">
                <h1>
                  GERARDO JOSE RAPETA JR <span>-Web Developer</span>
                </h1>
                <ul>
                  <li>
                    <strong>Aliases:</strong> "Geo", "Dork", "Bane of Tacos"
                  </li>
                  <li>
                    <strong>Origin:</strong> Unknown
                  </li>
                  <li>
                    <strong>Length:</strong> 5' 12"
                  </li>
                  <li>
                    <strong>Weight:</strong> (｢•-•)｢ ʷʱʸ?
                  </li>
                  <li>
                    <strong>Special Skills:</strong> "Making things look cool,
                    especially websites"
                  </li>
                  <li>
                    <strong>Weaknesses:</strong>
                    <ul>
                      <li>Paragraphs longer than three sentences</li>
                      <li>Carne asada fries</li>
                      <li>Stake to the heart</li>
                      <li>Garlic "bread"</li>
                    </ul>
                  </li>
                </ul>
              </TextBoxContainer>
            </TextBoxWrapper>
          </GeneralContainer>
        </GeneralWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
