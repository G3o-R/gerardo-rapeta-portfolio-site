import styled from "styled-components";
import { motion } from "framer-motion";

export const JourneySection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow:hidden;
  padding: 40px 0;
`;

export const Header = styled.div`

  h2 {
    font-size: 3rem;
    text-decoration: underline;
    margin: 0;
  }
`;

export const JourneyCardsWrapper = styled.div`
  max-width: 1560px;
  width: 100%;
  background-color: #1a1a1a;
`;

export const JourneyCardsContainer = styled(motion.div)`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  max-width: 1560px;
  padding: 4.5rem .75rem .5rem;

  @media screen and (max-width: 1560px) {
    &.fan{
      overflow:hidden;
    }
    overflow-y:hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  & > * {
    scroll-snap-align: center;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background: linear-gradient(to top, #0d110d, #334534);
    border-radius: 4px;
  }
  }

`;

// card related styles

export const CardWrapper = styled(motion.div)`
  max-width: 300px;
  aspect-ratio: 3/5;
  width: 100%;
  cursor: pointer;

  &.card-1 {
    z-index: 5;
    position: absolute;
  }
  &.card-2 {
    z-index: 4;
    position: absolute;
  }
  &.card-3 {
    z-index: 3;
    position: absolute;
  }
  &.card-4 {
    z-index: 2;
    position: absolute;
  }
  &.card-5 {
    position: absolute;
    z-index: 1;
  }
  &.spacer {
    opacity: 0;
  }

  @media screen and (min-width: 568px) {
    max-width: 300px;
  }
`;

export const CardContainer = styled.div`
  background: linear-gradient(to bottom right, #1a1a1a, #0d110d);
  background-color: #1a1a1a;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  border: 1px solid #09290b;
  /* box-shadow: 4px 4px 23px 2px #33453425; */
  text-align: left;
`;

export const TextBoxWrapper = styled.div`
  /* width: 100%; */
`;

export const TextBoxContainer = styled.div`
  text-align: left;
  /* width: 100%; */
  padding: 0.75rem;
  /* opacity: 0; */

  h2 {
    text-decoration: none;
    margin: 0.25em 0em;
    font-size: 2.5em;
  }

  p {
    margin-right: 2em;
    font-size: 1.25rem;
  }
`;
