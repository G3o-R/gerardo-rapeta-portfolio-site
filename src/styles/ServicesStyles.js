import styled from "styled-components";

export const StyledServicesSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  max-width: 92.5rem;
  width: 100%;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
`;

export const Header = styled.div`
  margin-bottom: 1rem;
  h2 {
    text-decoration: underline;
    margin: 0;
  }
`;

export const NavButton = styled.button`
  background-color: rgba(10, 10, 10, 0.2);
  border: none;
  border-radius: 50%;
  aspect-ratio: 1/1;
  height: 50px;
  width: 50px;
  &::after {
    color: #c2c2c2;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const HostingInfoWrapper = styled.div`
  max-width: 950px;
  width: 100%;
  margin: 0.5rem 0.5rem 1rem;
  @media screen and (min-width: 1440px) {
    margin: 2rem 0;
  }
`;

export const HostingInfoContainer = styled.div`
  background-color: #132820;
  border-radius: 3rem;
  padding: 1rem;
  strong {
    color: #03a062;
    text-decoration: underline;
  }
  p {
    margin: 0.5rem 1rem;
  }
  a {
    color: #dee7e1;
    text-decoration: none;
    font-weight: normal;

    &:hover {
      text-decoration: underline;
      color: #03a062;
    }
  }
`;
