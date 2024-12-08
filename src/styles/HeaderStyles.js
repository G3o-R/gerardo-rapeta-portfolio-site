import styled from "styled-components";
import PolkADot from "../images/PolkADot.jpg";

export const HeaderWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 1080px) {
    height: 650px;
  }
  `;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  overflow: hidden;
  @media screen and (min-width: 1080px) {
    flex-direction: row;
  }
`;

export const GeneralWrapper = styled.div`
  &.pfp {
    position: relative;
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
    
    @media screen and (max-width: 1079px) {
    max-height: 450px;
    }
    
    @media screen and (min-width: 1560px) {
      max-width: 800px;
    }
  }
  
  &.text {
    width: 100%;
    height: 100%;
    position: relative;
    @media screen and (max-width: 568px) {
      /* height: 560; */
    }
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
    
    @media screen and (max-width: 1079px) {
      max-height: 450px;
    }
  }

  &.text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  background-image: linear-gradient(to bottom right, #0d6759, #334534);
  padding: 5px;
  aspect-ratio: 1/1;
  margin: 25px;
  border-radius: 50%;
  filter: drop-shadow(10px 8px 10px rgb(0, 0, 0, 0.25));

  @media screen and (min-width: 1560px) {
    max-width: 600px;
  }
`;

export const ImageContainer = styled.div`
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
  width: 100%;
  height: 100%;
  margin: 20px;
  max-width: 750px;
  @media screen and (min-width: 1080px){
    max-height: 85%;
    
  }

  @media screen and (min-width: 1560px) {
    margin: 0 20px;
    max-height: 500px;
    max-width: 1000px;
  }

  @media screen and (min-width: 2200px) {
    position: absolute;
    left: 200px;
    margin: 0;
  }
`;

export const TextBoxContainer = styled.div`
  height: 100%;
  background-color: #0d110d;
  border: 10px solid #334534;
  border-radius: 24px;
  color: #dee7e1;
  padding-left: 30px;
  text-align: left;

  h1 {
    font-size: 2.5rem;
    font-weight: normal;
    color: #dee7e1;
    text-transform: uppercase;
    margin-bottom: 0px;

    display: inline-block;
    justify-self: left;
    margin-right: 10px;

    @media screen and (max-width: 520px ){
      line-height: 100%;
    }
  }

  span {
    font-size: 1.2rem;
    display: inline-block;
  }

  @media screen and (max-width: 1560px) {
    h3,
    span {
      display: block;
      margin-right: 0;
    }

    span {
      margin-top: 0px;
      margin-bottom: 15px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 15px;
  }

  li {
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: left;

    @media screen and (min-width: 1560px) {
      font-size: 1.5rem;
    }
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
