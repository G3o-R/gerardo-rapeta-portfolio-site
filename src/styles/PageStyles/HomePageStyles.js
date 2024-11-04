import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  /* padding: 2rem 1rem; */
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  /* border-radius: 8px; */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
/* 
  & > div {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  & > div:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  } */
`;
