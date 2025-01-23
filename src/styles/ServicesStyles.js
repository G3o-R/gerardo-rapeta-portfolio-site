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
  gap: 0.75rem;
  max-width: 1560px;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
  h2 {
    text-decoration: underline;
    margin: 0;
  }
`;

export const ServicesCardWrapper = styled.div`
  height: 6.25em;
  max-width: 27.5em;

  &.start-up {
    height: 50rem;
    background: #064943;
  }

  &.standard {
    height: 59.375rem;
    background: linear-gradient(180deg, #064943 0%, #053a36 100%);
  }

  &.advanced {
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
  margin: auto 10px;
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
  max-height: 6.25rem;

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

  img {
    height: 6.25rem;
  }
`;

export const DescriptionContainer = styled.div`
  &.pricing {
    text-align: left;
  }
`;
