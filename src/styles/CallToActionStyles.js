import styled from "styled-components";

export const CTASection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  `;

export const CTAWrapper = styled.div`
  max-width: 85rem;
  width: 100%;
  padding: 0 2rem;
  background: linear-gradient(279.08deg, #064943 0.28%, #078453 99.73%);
  border-radius: 0px;
  
  @media screen and (min-width: 568px) {
      margin: 1rem 0 4rem;
      border-radius: 100px;
}
`;

export const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .question {
    color: #000000;
    margin: 1rem 2rem;
    font-size: 1.5rem;

    @media screen and (min-width: 568px) {
      font-size: 1.75rem;
    }

    @media screen and (min-width: 790px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 868px) {
      font-size: 2.5rem;
    }

    @media screen and (min-width: 1080px) {
      font-size: 3rem;
    }
  }
  .CTA {
    width: 100%;
    text-align: center;
    margin: 0 3rem;
    max-width: 30rem;

    @media screen and (min-width: 868px) {
      max-width: 40rem;
    }

    @media screen and (min-width: 1080px) {
      max-width: 51.25rem;
    }
  }
`;

export const BTNContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d110d;
  max-width: 20em;
  width: 100%;
  border-radius: 999px;
  height: 3.5rem;
  margin: 0.5rem 0rem 1rem;

  @media screen and (min-width: 790px) {
  max-width: 22em;
}

  @media screen and (min-width: 868px) {
  max-width: 24em;
}

  @media screen and (min-width: 1080px) {
    height: 4rem;
    margin: 1rem 0rem 2rem;
    max-width: 26.25rem;
  }

  .get-started {
    color: #ffffff;
    text-decoration: none;
    font-size: 2rem;
    margin: auto 0;

    @media screen and (min-width: 790px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 868px) {
      font-size: 2.5rem;
    }

    @media screen and (min-width: 1080px) {
      font-size: 3rem;
    }
  }
`;
