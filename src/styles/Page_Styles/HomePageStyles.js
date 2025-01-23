import styled from "styled-components";

export const StyledHomePage = styled.div`
overflow-x: hidden;
  h1{
    color: #ffffff;
    font-family: Arsenal-Regular;
    font-size: 2.1875rem;

    @media screen and (min-width: 568px){
      font-size: 2.5rem;
    }

    @media screen and (min-width: 790px) {
    font-size: 2.8125rem;
    }

    @media screen and (min-width: 868px) {
      font-size: 3.125rem
    }
    @media screen and (min-width: 960px) {
      font-size: 3.125rem
    }

    @media screen and (min-width: 1080px) {
      font-size: 4.375rem
    }

    @media screen and (min-width: 1250px){
      font-size: 5.625rem;
    }
  }

  h2{
    font-family: Arsenal-Regular;
    color: #ffffff;
    font-size: 3rem;

    &.title{
      font-size: 6.25rem;
    }

  }

  p, li {
    font-family: InriaSerifRegular;
    color: #ffffff;
    font-size: 1.75rem;
  }

  /* p{
    font-size: 1.75rem;
  }

  li{
    font-size: 1.75rem;
  } */

`;
