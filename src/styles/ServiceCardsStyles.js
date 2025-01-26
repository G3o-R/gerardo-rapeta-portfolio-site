import styled from "styled-components";

export const ServicesCardWrapper = styled.div`
  width: 100%;
  max-width: 27.5em;
  min-width: calc(100vw + 1.5rem);

  @media screen and (min-width: 468px) {
    min-width: 25rem;
  }

  &.start-up {
    height: 43rem;
    background: #064943;

    @media screen and (min-width: 1280px) {
      height: 50rem;
    }
  }

  &.standard {
    height: 48.375rem;
    background: linear-gradient(180deg, #064943 0%, #053a36 100%);
    @media screen and (min-width: 1280px) {
      height: 59.375rem;
    }
  }

  &.advanced {
    position: relative;
    height: 50.625rem;
    background: linear-gradient(180deg, #064943 0%, #053a36 100%);
    @media screen and (min-width: 1280px) {
      height: 65.625rem;
    }
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
  margin: 1.5rem 1.875rem;
  position: relative;
  height: 100%;
  max-height: 5rem;

  @media screen and (min-width: 1280px) {
    max-height: 6.25rem;
  margin: 2.5rem 1.875rem;
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
    height: 4.5rem;

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
