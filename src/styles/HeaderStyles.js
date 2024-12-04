import styled from "styled-components";
import PolkADot from "../images/PolkADot.jpg";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 650px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  overflow: hidden;
`;

export const GeneralWrapper = styled.div`
  &.pfp {
    position: relative;
    max-width: 33.3%;
    width: 100%;
    height: 100%;
    aspect-ratio: 5/6;
    background-color: #232323;
    filter: drop-shadow(36px 0px 49px rgb(0, 0, 0, 0.44));
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(${PolkADot});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0.1;
      z-index: -1;
    }
  }

  &.text {
    max-width: 66.7%;
    width: 100%;
  }
`;

export const GeneralContainer = styled.div`
  width: 100%;
  height: 100%;
  &.pfp {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0px 4px 90px 0px rgb(0, 0, 0, 0.5);
  }

  &.text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 400px;
  aspect-ratio: 100%;
  overflow: hidden;
  background-color: #334534;
  padding: 5px;
  border-radius: 50%;
  filter: drop-shadow(10px 8px 10px rgb(0, 0, 0, 0.25));
`;

export const ImageContainer = styled.div`
  max-width: 400px;
  max-height: 400px;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const TextBoxWrapper = styled.div`
  max-width: 750px;
  max-height: 450px;
  width: 100%;
  height: 100%;
  border-radius: 32px;
`;

export const TextBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0d110d;
  border: 10px solid #334534;
  border-radius: 24px;
  color: #dee7e1;
  padding-left: 30px;
  h1 {
    font-size: 1.8rem;
    font-weight: normal;
    color: #dee7e1;
    text-transform: uppercase;
    margin-bottom: 15px;
    text-align: left;
  }

  span {
    font-size: 1.2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    
}

li {
    margin-bottom: 10px;
    font-size: 1rem;
    line-height: 1.5;
    text-align: left;
  }

  li ul {
    margin-top: 5px;
    margin-left: 30px;
    list-style-type: disc;
  }

  strong {
    font-weight: normal;
  }
`;
