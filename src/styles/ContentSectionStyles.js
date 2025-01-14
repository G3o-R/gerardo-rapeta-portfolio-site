import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    justify-content: center;


`;

export const ContentContainer = styled.div`
max-width: 1250px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Define 3 columns: two fractions, one fraction, one fraction */
  grid-template-areas: "about-me about-me flatiron-cert" "project1 project2 project3";
  grid-template-rows: 1fr 1fr; /* Two rows of equal height */
  gap: 10px; /* Add some spacing between grid items */

  /* Add full height if needed */
  width: 100%;
  height: 100%;
`;

// Style updates to ensure correct grid placement
export const InfoCardWrapper = styled.div`
  height: 100%;
  max-height: 25rem;
  background-color: #03A062;

  &.about-me {
    grid-area: about-me;
  }

  &.flatiron-cert {
    grid-area: flatiron-cert;
  }

  &.project1 {
    grid-area: project1;
  }

  &.project2 {
    grid-area: project2;
  }

  &.project3 {
    grid-area: project3;
  }
`;

export const InfoCardContainer = styled.div`

`;

export const SubHeader = styled.h2`

`;

export const Text = styled.p`

`;

export const ImageWrapper = styled.div`

`;

export const ImageContainer = styled.div`

`;

export const OverlayInfo = styled.div`

`;

export const ButtonsWrapper = styled.div`

`;

export const ButtonsContainer = styled.div`

`;