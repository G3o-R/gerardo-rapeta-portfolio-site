import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 20px;
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    /* align-items: center; */
    gap: 15px;
    overflow: visible;
    overflow-x: scroll;
    height: 275px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin: 0 auto;
    &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background: #bcbfc1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d3d4d6;
  }
  @media screen and (min-width: 868px) {
    max-width: 900px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 20px;
    justify-items: center;

    & > *:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1;
    }

    & > *:nth-child(2) {
      grid-column: 2 / 3;
      grid-row: 1;
    }

    & > *:nth-child(3) {
      grid-column: 1 / 3;
      grid-row: 2;
      justify-self: center;
    }
  }

  @media screen and (min-width: 1260px) {
    max-width: 1560px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
  }
`;
