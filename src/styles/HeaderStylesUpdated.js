import styled from "styled-components";
import PolkADot from "../images/PolkADot.avif";

export const HeaderWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 1080px) {
    height: 600px;
  }
  `;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #0D110D;
  overflow: hidden;
  @media screen and (min-width: 1080px) {
    flex-direction: row;
  }
`;