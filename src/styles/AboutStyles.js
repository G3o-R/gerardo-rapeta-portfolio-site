import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem 10px;
  @media screen and (min-width: 568px){
    padding: 4rem 20px;
  }
`;

export const AboutCardWrapper = styled.div`
  max-width: 1250px;
  width: 100%;
  height: 100%;
`;

export const AboutCardContainer = styled.div`
  height: 100%;
  /* background: linear-gradient(to bottom right, #1a1a1a, #2d2d2d); */
  background: linear-gradient(to bottom right, #1a1a1a, #0D110D);
  padding: 2rem;
  border-radius: 18px;
  border: 1px solid #09290b;
  box-shadow: 4px 4px 23px 2px #33453425;
  @media screen and (min-width: 568px){
    padding: 3rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  text-align: left;

  h1 {
    text-transform: uppercase;
    color: #dee7e1;
    text-decoration: underline;
    font-weight: normal;
    margin: 0;

    font-size: 4rem;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 360px) {
      font-size: 2rem;
    }
  }
`;

export const TextWrapper = styled.div`
  /* margin: 0rem 2rem; */
`;

export const TextContainer = styled.div`
  text-align: left;

  p {
    /* Base font size for large screens */
    font-size: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.75rem; /* Smaller tablets */
    }

    @media screen and (max-width: 480px) {
      font-size: 1.5rem; /* Small phones */
    }

    @media screen and (max-width: 360px) {
      font-size: 1.25rem; /* Very small phones */
    }
  }
`;
