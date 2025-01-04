import styled from "styled-components";

export const StyledHomePage = styled.div`
overflow-x: hidden;
  h1, p{
    color: #dee7e1;
    font-family: Arsenal-Regular;
    font-size: 90px;
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
