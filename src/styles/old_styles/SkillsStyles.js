import styled from "styled-components";

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  text-align: left;  
  h2 {
      font-size: 3rem;
      text-decoration: underline;
      margin: 0;
    }
    `;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  max-width: 950px;
  width: 100%;
  padding: 10px;
  margin: 10px;

  .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  `;

export const SkillCardWrapper = styled.div`
  max-width: 400px;
  aspect-ratio: 3/5;
  width: 100%;
  margin: 5px;
  
  `;

export const SkillCardContainer = styled.div`
  background: linear-gradient(to bottom right, #1a1a1a, #0D110D);
  background-color: #1A1A1A;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  border: 1px solid #09290b;
  box-shadow: 4px 4px 23px 2px #33453425;
  `;

export const TextBoxWrapper = styled.div`
    width: 100%;

`;

export const TextBoxContainer = styled.div`
  text-align: left;
  width: 100%;
  padding: .75rem;

  h2 {
    font-weight: normal;
    font-size: 3rem;
    text-decoration: underline;
    padding-left: 1.5rem;
    margin: 0.5em 0;
  }

  ul {
    margin: 0 1.5em 0 1.5rem;
    padding: 0;
    width: 70%;
    li {
      margin: 0.5rem 1.5rem 1rem;
      font-size: 1.75rem;
      font-family: Arsenal-Regular;
      &::marker {
        font-size: 0.75em;
      }

      span {
        font-style: italic;
      }
    }
  }
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  aspect-ratio: 1/1;
  height: 50px;
  width: 50px;
  &::after{
    color: #DEE7E1;
    font-size: 28px;
    font-weight: 700;
  }

  &.swiper-button-disabled{
    opacity: 0;
  }
`;