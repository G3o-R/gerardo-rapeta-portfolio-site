import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  pointer-events: none;
  `;

export const DragMenuWrapper = styled(motion.div)`
  position: fixed;
  z-index: 9000;
  pointer-events: auto;
  max-width: 50px;
  max-height: 50px;
  background: transparent;
  /* bottom: 0;
  right: 0; */

  &.active {
    max-width: 17rem;
    max-height: 23.5rem;
    border-radius: 25px;
    background: linear-gradient(to bottom right, #09290b, #125316);
    
  }
`;

export const DragMenuContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  
`;

export const MenuBtn = styled.button`
  position: absolute;
  background: linear-gradient(to top right, #0d110d, #09290b);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  border: none;
  cursor: pointer;
  pointer-events: auto;

  /* bottom: 0;
  right: 0; */

  &.top-right{
    right: 0;
    top: 0;
  }
  
  &.top-left{
    left: 0;
    top: 0;
  }

  &.bottom-right{
    bottom: 0;
    right: 0;
  }

  &.bottom-left{
    bottom: 0;
    left: 0;
  }
`;

export const MenuNavWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  
  &.active {
    height: 100%;
    width: 100%;
    opacity: 1;
    pointer-events: auto;

  }
`;

export const MenuNavContainer = styled.div`
  margin: 1.5rem 2rem auto 0;
  text-align: left;

  li {
    list-style: none;
    color: #dee7e1;
    margin-top: 1em;
    font-family: Arsenal-Regular;
    font-size: 28px;
    cursor: pointer;

    &:last-child {
      color: #0d110d;
      font-family: Arsenal-Italic;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
