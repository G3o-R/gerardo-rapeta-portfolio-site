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
  /* position: relative; */

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

  .swiper-slide-active{
    position: relative;
    z-index: 3;
  }

  .swiper-slide-previous, .swiper-slide-next{
    z-index:2;
  }
`;

export const Header = styled.div`
  margin-bottom: 1rem;
  h2 {
    text-decoration: underline;
    margin: 0;
  }
`;

export const ServicesCardWrapper = styled.div`
  height: 6.25em;
  width: 100%;
  max-width: 27.5em;
  min-width: 23.438rem;

  &.start-up {
    height: 50rem;
    background: #064943;
  }

  &.standard {
    height: 59.375rem;
    background: linear-gradient(180deg, #064943 0%, #053a36 100%);
  }

  &.advanced {
    position: relative;
    height: 65.625rem;
    background: linear-gradient(180deg, #064943 0%, #053a36 100%);
  }
`;

export const ServicesCardContainer = styled.div`
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  text-align: left;
  display: flex;
  align-items: left;
  height: 6.24rem;
  &.start-up {
    background: linear-gradient(-90deg, #02804e 0%, #03a062 100%);
  }

  &.standard {
    background: linear-gradient(270.07deg, #013a24 0.06%, #078453 99.94%);
  }

  &.advanced {
    background: linear-gradient(270.07deg, #132820 0.06%, #013a24 99.94%);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 0.625rem;
  gap: 0.5em;
  img {
    height: 4rem;
  }

  h2 {
    height: auto;
    margin: 0;
  }
`;

export const Services = styled.div``;

export const ServiceWrapper = styled.div`
  margin: 2.5rem 1.875rem;
  position: relative;
  height: 100%;
  max-height: 5rem;

  @media screen and (min-width: 1280px) {
    max-height: 6.25rem;
  }

  .start-up > &:not(:last-child)::after {
    content: "";
    display: block;
    height: 1px;
    background: #03a062;
    width: 100%;
    position: absolute;
    bottom: -1.25rem;
    left: 0;
  }

  .standard > &:not(:last-child)::after {
    content: "";
    display: block;
    height: 1px;
    background: linear-gradient(to right, #03a062 0%, #3a8266 100%);
    width: 100%;
    position: absolute;
    bottom: -1.25rem;
    left: 0;
  }

  .advanced > &:not(:last-child)::after {
    content: "";
    display: block;
    height: 1px;
    background: linear-gradient(to right, #03a062 0%, #013a24 100%);
    width: 100%;
    position: absolute;
    bottom: -1.25rem;
    left: 0;
  }
`;

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  &.align-right {
    flex-direction: row;
  }

  &.row-reverse {
    flex-direction: row-reverse;
  }

  img,
  svg {
    height: 5rem;

    @media screen and (min-width: 1280px) {
      height: 6.25rem;
    }
  }
`;

export const DescriptionContainer = styled.div`
  &.pricing {
    text-align: left;
  }
`;

export const NavButton = styled.button`
  background-color: rgba(10, 10, 10, 0.2);
  border: none;
  border-radius: 50%;
  aspect-ratio: 1/1;
  height: 50px;
  width: 50px;
  &::after{
    color: #c2c2c2;
    font-size: 28px;
    font-weight: 700;
  }
`;