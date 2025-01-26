import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 31.25rem;
  overflow: hidden;
  background-color: #0d110d;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 568px) {
    height: 26.75rem;
  }

  @media screen and (max-width: 468px) {
    height: calc(100vw - 4rem);
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (min-width: 769px) {
    height: 25rem;
  }
  @media screen and (min-width: 1080px) {
    height: 31.25rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 120%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    background: linear-gradient(311.5deg, #183228 2.71%, #064943 97.29%);
    aspect-ratio: 1/1;
    border-radius: 50%;
    position: relative;
  }

  @media screen and (min-width: 769px) {
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 769px) {
    margin: 0 1rem;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  border-radius: 200px 0 0 200px;
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  width: 100%;

  @media screen and (min-width: 568px){
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    background: linear-gradient(311.5deg, #183228 2.71%, #064943 97.29%);
  }

  @media screen and (min-width: 1080px) {
    max-height: 25.625rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  background-image: linear-gradient(to bottom right, #0d6759, #0d110d);
  filter: drop-shadow(10px 8px 10px rgb(0, 0, 0, 0.25));
  aspect-ratio: 1/1;
  width: fit-content;
  height: fit-content;
  border-radius: 50%;

  @media screen and (max-width: 769px) {
    justify-content: center;
    align-items: center;
    margin-left: 12rem;
  }
  
  @media screen and (max-width: 568px){
    margin-left: auto;    
    margin-bottom: 0.5rem;
    margin-right: -1rem;
  }
  
  @media screen and (min-width: 769px) {
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  max-height: 21.875rem;
  max-width: 21.875rem;
  width: 100%;

  @media screen and (max-width: 568px) {
    max-width: calc(100vw - 14.375rem);
    min-width: 12.5rem;
  }

  @media screen and (max-width: 468px) {
    min-width: 10.938rem;
  }

  @media screen and (min-width: 1080px) {
    max-height: 25rem;
    max-width: 25rem;
  }

  img {
    object-fit: cover;
    width: 120%;
  }
`;

export const TextBoxWrapper = styled.div`
  margin: 0.75rem 3rem 0.75rem 1rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: -80px;
    width: 100%;
  }
  @media screen and (max-width: 568px) {
    margin: -6.125rem 3rem 0.75rem 0rem;
  }

  @media screen and (min-width: 1080px) {
    margin: 0.75rem 4rem 0.75rem 1rem;
  }
  @media screen and (min-width: 1250px) {
    margin: 0.75rem 6rem 0.75rem 1rem;
  }
`;

export const TextBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin: 0;
    text-align: left;
    &.name {
      @media screen and (max-width: 768px) {
        width: 60%;
      }
      @media screen and (min-width: 769px) {
        width: 100%;
      }
      @media screen and (min-width: 1080px) {
        margin-left: -1rem;
      }
    }
  }
`;

export const LanguagesWrapper = styled.div`
  padding: 1.25rem 0rem;
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 769px) {
    justify-content: flex-start;
    padding: 1.75rem 0rem;
    margin: 0;
  }
`;

export const LanguagesContainer = styled.div`
  display: flex;
  gap: 1rem;
  /* padding-left: 1rem; */
  .code-language {
    height: 35px;
  }

  @media screen and (min-width: 390px) {
    gap: 1.25rem;
    .code-language {
      height: 45px;
    }
  }

  @media screen and (min-width: 568px) {
    gap: 1.5rem;
    .code-language {
      height: 50px;
    }
  }

  @media screen and (min-width: 769px){
    padding-left: 1rem;
  }
`;
