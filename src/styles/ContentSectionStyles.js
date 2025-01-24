import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  `;

export const ContentContainer = styled.div`
  max-width: 1560px;
  display: grid;
  gap: 1rem;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
    grid-template-rows: repeat(2, minmax(15rem,auto));
    grid-template-areas:
      "about-me"
      "flatiron-cert";

  @media screen and (min-width: 668px) {
    grid-template-columns: repeat(2, 1fr  );
    grid-template-rows: repeat(3, minmax(12rem,auto));
    grid-template-areas:
      "about-me about-me"
      "flatiron-cert project1"
      "project2 project3";
  }

  @media screen and (min-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "about-me about-me flatiron-cert"
      "project1 project2 project3";
  }
`;

export const InfoCardWrapper = styled.div`
  height: 100%;
  max-height: 20rem;
  background-color: #0d110d;
  padding: 5px;
  
  &.portfolio-project {
    width: 100%;
    max-height: 18.75rem;
    @media screen and (min-width: 685px) {
      height: calc((100vw / 3) - 2.75rem);
      width: auto;
    }
    @media screen and (min-width: 1080px) {
      height: calc(100vw / 5);
    }
  }
  &.flatiron-cert {
    grid-area: flatiron-cert;
    cursor: pointer;
    max-height: 18.75rem;
    @media screen and (min-width: 685px) {
      height: calc((100vw / 3) - 2.75rem)
    }
    @media screen and (min-width: 1080px) {
      max-height: 20rem;
    }
  }

  &.about-me {
    grid-area: about-me;
    @media screen and (max-width: 685px) {
      max-height:100%;
    }
  }


  &#1 {
    grid-area: project1;
  }

  &#2 {
    grid-area: project2;
  }

  &#3 {
    grid-area: project3;
  }
`;

export const InfoCardContainer = styled.div`
  background-color: #03a062;
  background: linear-gradient(0deg, #02804e 0%, #03a062 100%);
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const SubHeader = styled.h2`
  margin: 0rem 1rem 0rem;
  padding-top: 1rem;
  text-align: left;
  
`;

export const Text = styled.p`
  margin: 0.5rem 1rem;
  font-style: titleCase;
  &.about-me {
    text-align: left;
    font-size: 1.5rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  &.flatiron-cert {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
  }
`;

export const OverlayInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
   .project-name {
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    padding: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  /* height:100%; */
  position: relative;
  overflow: hidden;

  .flatiron-cert > & {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0px;
    img {
      width: 100%;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  &:hover ${OverlayInfo} {
    opacity: 1;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  bottom: 1rem;
  z-index: 9;
  cursor: pointer;

  a,
  div {
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
    color: #ffffff;
    padding: 0.625em 1.25em;
    border-radius: 0.5em;
    transition: all 0.3s ease;
    background: linear-gradient(to bottom right, #0d6759, #334534);
    box-shadow: 0em 0.25em 0.375em rgba(0, 0, 0, 0.3);

    &:hover {
      transform: scale(1.1);
      box-shadow: 0em 0.375em 0.625em rgba(0, 0, 0, 0.5);
    }

    &.disabled {
      cursor: pointer;
    }
  }
`;

export const SwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 3rem; */
  width: 100%;
  margin-top: 1rem;
  
  .recent-projects{
    margin: .5rem 0rem;
    width: 100%;
  }

  .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
  `;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  aspect-ratio: 1/1;
  height: 50px;
  width: 50px;
  &::after{
    color: #DEE7E1;
    font-size: 28px;
    font-weight: 700;
  }

  &.swiper-button-disabled{
    opacity: 0;
  }
`;