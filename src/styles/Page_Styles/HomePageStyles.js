import styled from "styled-components";

export const StyledHomePage = styled.div`
overflow-x: hidden;
  h1{
    color: #ffffff;
    font-family: Arsenal-Regular;
    font-size: 35px;

    @media screen and (min-width: 568px){
      font-size: 40px;
    }

    @media screen and (min-width: 790px) {
    font-size: 45px;
    }

    @media screen and (min-width: 868px) {
      font-size: 50px
    }
    @media screen and (min-width: 960px) {
      font-size: 50px
    }

    @media screen and (min-width: 1080px) {
      font-size: 70px
    }

    @media screen and (min-width: 1250px){
      font-size: 90px;
    }
  }

  h2{
    font-family: Arsenal-Regular;
    color: #ffffff;
    font-size: 3rem;

  }

  p {
    font-family: InriaSerifRegular;
    color: #ffffff;
    font-size: 1.5rem;
  }

`;
