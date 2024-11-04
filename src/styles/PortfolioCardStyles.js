import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const PortfolioContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const ProjectInfo = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  
  h1 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  label {
    font-size: 0.9rem;
    color: #777;
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin: 0;

    li {
      font-size: 0.9rem;
      color: #555;
      margin: 0.25rem 0;
    }
  }
`;

export const ProjectAbout = styled.div`
  padding: 1.5rem;

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }
`;
