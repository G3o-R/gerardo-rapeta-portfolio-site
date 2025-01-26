import styled from "styled-components";

export const StyledHomePage = styled.div`
  overflow-x: hidden;
  h1 {
    color: #ffffff;
    font-family: Roboto, Arsenal-Regular;
    font-size: 2.1875rem;

    @media screen and (min-width: 568px) {
      font-size: 2.5rem;
    }

    @media screen and (min-width: 790px) {
      font-size: 2.5rem;
    }

    @media screen and (min-width: 868px) {
      font-size: 2.75rem;
    }

    @media screen and (min-width: 1080px) {
      font-size: 3.75rem;
    }

    @media screen and (min-width: 1250px) {
      font-size: 4.5rem;
    }
  }

  h2 {
    font-family: ArsenalSC-Bold, Arsenal-Regular;
    color: #ffffff;
    font-size: 3rem;

    &.title {
      font-size: 3rem;
      @media screen and (min-width: 868px) {
        font-size: 3.125rem;
      }
      @media screen and (min-width: 960px) {
        font-size: 4.375rem;
      }

      @media screen and (min-width: 1080px) {
        font-size: 5.625rem;
      }

      @media screen and (min-width: 1250px) {
        font-size: 6.25rem;
      }

    }
  }

  p,
  li {
    font-family: ArsenalSC-Regular, Arsenal-Regular;
    color: #ffffff;
    font-size: 1.5rem;
    @media screen and (min-width: 1280px) {
      font-size: 1.75rem;
    }
  }

  /* p{
      font-size: 1.5rem;      
    }

  li{
    font-size: 1.75rem;
  } */
`;
