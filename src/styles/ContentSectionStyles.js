import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const ContentContainer = styled.div`
  max-width: 1560px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "about-me about-me flatiron-cert"
    "project1 project2 project3";
  grid-template-rows: 1fr 1fr;
  gap: 1rem 0.375rem;

  width: 100%;
  height: 100%;
`;

export const InfoCardWrapper = styled.div`
  height: 100%;
  max-height: 20rem;
  background-color: #0d110d;
  padding: 5px;

  &.portfolio-project {
    max-height: 20rem;
  }

  &.about-me {
    grid-area: about-me;
  }

  &.flatiron-cert {
    grid-area: flatiron-cert;
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
`;

export const SubHeader = styled.h2`
  margin: 0rem 1rem;
  text-align: left;
`;

export const Text = styled.p`
  margin: 0.5rem 1rem;
  &.about-me {
    text-align: left;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-bottom: 0.125em solid #1a1a1a;
`;

export const OverlayInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* A translucent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out; /* Smooth fade effect */

  /* Text styling inside OverlayInfo */
  .project-name {
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    padding: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  /* height: 100%; */
  width: 100%;
  position: relative; /* Ensures OverlayInfo is positioned relative to this container */
  overflow: hidden;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  &:hover ${OverlayInfo} {
    opacity: 1; /* Show overlay on hover */
  }
`;

export const ButtonsWrapper = styled.div``;

export const ButtonsContainer = styled.div``;
