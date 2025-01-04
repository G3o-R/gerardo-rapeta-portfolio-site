import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 1080px) {
    height: 600px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #0d110d;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1080px) {
    flex-direction: row;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  background-color: #183228;
  height: 100%;
  width: 100%;
  border-radius: 200px 0 0 200px;
  max-width: 1440px;
  max-height: 410px;
  display: flex;
  flex-direction: row;
`;

export const ImageWrapper = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom right, #0d6759, #0d110d);
  filter: drop-shadow(10px 8px 10px rgb(0, 0, 0, 0.25));
  aspect-ratio: 1/1;
  width: fit-content;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1/1;
  max-width: 400px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  
  img {
    object-fit: cover;
    width: 120%;
  }
`;

export const TextBoxWrapper = styled.div`
height: 100%;
margin: .75rem 0rem .75rem -1rem;
`;

export const TextBoxContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h1{
    margin: 0;
}

`;

export const LanguagesWrapper = styled.div`
    padding: 1.75rem 0rem;

`;

export const LanguagesContainer = styled.div`
    display: flex;
    gap: 1.75rem;
    justify-content: center;
    .code-language{
        height:50px;
    }
`;