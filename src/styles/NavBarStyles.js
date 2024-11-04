import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #000;
  height: 120px;
  padding: 0 2rem;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex-direction: row;
  padding-bottom: 5px;

  button,
  a {
    padding: 0;
    font-family: Sanchez, serif;
    font-size: 16px;
    font-weight: 500;
    color: white;
    cursor: pointer;
  }

  button {
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }

  @media screen and (max-width: 450px) {
    background-color: #303030;
    padding: 5px 15px;
    margin-left: 5px;
    border-radius: 24px;
    width: 70%;
    justify-content: space-around;
    gap: 10px;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding-bottom: 3px;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    /* color: #f5a623; */
    color: #f7f7f7;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

export const SocialsWrapper = styled.div`

`;

export const SocialsContainer = styled.div`

`;