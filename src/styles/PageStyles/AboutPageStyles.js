import styled from "styled-components";

export const About = styled.div`
padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 2rem 1rem; */
  background-color: #f9f9f9;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem 0;
`;

export const HeaderContainer = styled.div`
  h1 {
    font-size: 2rem;
    color: #333;
    font-weight: 700;
    border-bottom: 2px solid #0d192b;
    padding-bottom: 0.5rem;
    display: inline-block;
    margin-bottom: 0;
  }
`;

export const AboutMeWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const AboutMeContainer = styled.div`
  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    text-align: justify;
  }
`;

export const EducationWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem 0;
`;

export const EducationContainer = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const School = styled.div`
  h1 {
    font-size: 1.2rem;
    color: #333;
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: #777;
  }
`;

export const PlaceNTime = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #555;

  .location {
    font-weight: bold;
  }

  .date {
    font-style: italic;
  }
`;

export const TechnicalSkillsWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
  margin-bottom: 4rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const TechnicalSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const LanguagesColumnContainer = styled.div`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
`;
