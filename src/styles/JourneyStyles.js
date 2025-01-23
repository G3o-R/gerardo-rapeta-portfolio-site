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
`;

export const JourneyCardsContainer = styled(motion.div)`
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
      cursor: pointer;
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
      cursor: grab;
      
      background: linear-gradient(0deg, #02804e 0%, #03a062 100%);
      border-radius: 4px;
    }
  }
  
  `;

export const CardWrapper = styled(motion.div)`
  max-width: 300px;
  aspect-ratio: 3/5;
  width: 100%;

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
  background: linear-gradient(0deg, #02804e 0%, #03a062 100%);
  width: 100%;
  height: 100%;
  border: .5rem solid #0d110d;
  text-align: left;
`;

export const TextBoxWrapper = styled.div`
`;

export const TextBoxContainer = styled.div`
  text-align: left;
  padding: 0.75rem;

  h2 {
    text-decoration: none;
    margin: 0.25em 0em;
    font-size: 2.5em;
  }

  .journey {
    margin-right: 2em;
    font-size: 1.25rem;
  }
`;
