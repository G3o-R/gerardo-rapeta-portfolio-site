import styled from "styled-components";

export const StyledHomePage = styled.div`
overflow-x: hidden;
  h1, p{
    color: #dee7e1;
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

  li, h2 {
    font-family: InriaSerifRegular;
    color: #dee7e1;
  }
  h2{
    color: #dee7e1;
    font-size: 3rem;
    text-decoration: underline;
    font-weight: normal;
    @media screen and (min-width: 650px){
      font-size: 4rem;
      
    }

  }
  p {
    font-family: InriaSerifRegular;
    color: #DEE7E1;
  }

`;
