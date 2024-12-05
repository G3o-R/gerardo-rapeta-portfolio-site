import styled from "styled-components";

export const MainCardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16/11;
`;

export const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    transform: rotateY(180deg);
  }
`;

export const FrontFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #2d2d2d;
  background: linear-gradient(to bottom right, #1a1a1a, #2d2d2d);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  border-bottom: 2px solid #1a1a1a;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const BackFace = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(to bottom right, #2d2d2d, #1a1a1a);
  transform: rotateY(180deg);
  border-radius: 24px;
  border: 3px solid #1a1a1a;
  overflow: hidden;
  color: #dee7e1;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

export const TextContainer = styled.div`
  &.front {
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 1.75em;
      font-weight: bold;
      color: #dee7e1;
    }
  }

  &.back {
    margin: 10px 10px auto;
    p {
      font-size: auto;
      line-height: 1.5;
      text-align: center;
      color: #dee7e1;
      @media screen and (min-width: 400px) {
        font-size: 1.125em
      }

      @media screen and (min-width: 568px){
        font-size: 1.25em;
      }
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;

  a, div {
    text-decoration: none;
    font-size: 1.125em;
    font-weight: bold;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 8px;
    transition: all 0.3s ease;
    background: linear-gradient(to bottom right, #0d6759, #334534);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
    }

    &.disabled{
      cursor: pointer;
    }
  }
`;
