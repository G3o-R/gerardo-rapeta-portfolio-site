import styled from "styled-components";

export const StyledHomePage = styled.div`
overflow-x: hidden;
  h1, p{
    font-family: Arsenal-Regular;
  }
  li, h2 {
    font-family: InriaSerifRegular;
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
