import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  background-color: #0D110D;
  color: #DEE7E1;
  padding: 20px;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 40px 20px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  background-image: linear-gradient(to bottom right, #0d6759, #0D110D);
  padding: 5px;
  aspect-ratio: 1/1;
  max-width: 18.75rem;
  border-radius: 50%;
  filter: drop-shadow(10px 8px 10px rgb(0, 0, 0, 0.25));

  @media screen and (min-width:568px) {
  max-width: 21.875rem;
  }
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  text-align: left;
  max-width: 20rem;

  .title {
    font-size: 1.5rem;
    color: #DEE7E1;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }
  }

  .contact-location {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: #DEE7E1;

    li {
      margin: 4px 0;
    }
  }

  a {
    color: #DEE7E1;
    text-decoration: none;
    font-weight: normal;

    &:hover {
      text-decoration: underline;
      color: #0d6759;
    }
  }

  p {
    font-size: 1rem;
    color: #DEE7E1;
    font-style: italic;
    max-width: 500px;
  }
`;
