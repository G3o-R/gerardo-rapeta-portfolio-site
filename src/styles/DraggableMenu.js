import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const DragWrapper = styled(motion.div)`
  position: fixed;
  width: 50px;
  height: 50px;
  pointer-events: auto;
  border-radius: 25px;

`;

export const DragContainer = styled.div`
  position: relative;
  overflow: visible;
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    position: fixed;
    left: 1rem;
    bottom: 1rem;
  }
`;



export const MenuBtn = styled.button`
  position: absolute;
  background: linear-gradient(to top right, #0d110d, #09290b);
  width: 50px;
  height: 50px;
  left: 0;
  top: 0;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  pointer-events: auto;
  color: #dee7e1;
  font-size: 32px;
`;

export const MenuNavWrapper = styled(motion.div)`
  position: absolute;
  width: 0;
  height: 0;
  background: linear-gradient(to bottom right, #09290b, #125316);
  border-radius: 25px;
  overflow: hidden;
  transition: width 0.3s ease, height 0.3s ease;

  &.top-right {
    right: 0;
    top: 0;
  }

  &.top-left {
    left: 0;
    top: 0;
  }

  &.bottom-right {
    bottom: 0px;
    right: 0;
  }

  &.bottom-left {
    bottom: 0px;
    left: 0;
  }

  &.active {
    max-width: 17em;
    max-height: 23.5em;
    width: 17em;
    height: 23.5em;
    transition: width 0.3s ease, height 0.3s ease;
  }

  &.inactive {
    max-width: 0;
    max-height: 0;
    width: 0;
    height: 0;
  }
`;

export const MenuNavContainer = styled.div`
  margin: 3rem 2rem auto 0;
  text-align: left;
  opacity: 0;
  transition: opacity 0.3s ease;
  &.visible {
    opacity: 1;
    transition-delay: 0.3s;
  }

  li {
    list-style: none;
    color: #dee7e1;
    margin-top: .5em;
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
