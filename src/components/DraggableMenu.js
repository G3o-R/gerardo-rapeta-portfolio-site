import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Wrapper,
  DragMenuWrapper,
  MenuBtn,
  DragMenuContainer,
  MenuNavWrapper,
  MenuNavContainer,
} from "../styles/DraggableMenuStyles";

const DraggableMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [closestCorner, setClosestCorner] = useState("top-left");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const calculateClosestCorner = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const distances = {
      "top-left": Math.sqrt(Math.pow(position.x, 2) + Math.pow(position.y, 2)),
      "top-right": Math.sqrt(
        Math.pow(screenWidth - position.x, 2) + Math.pow(position.y, 2)
      ),
      "bottom-left": Math.sqrt(
        Math.pow(position.x, 2) + Math.pow(screenHeight - position.y, 2)
      ),
      "bottom-right": Math.sqrt(
        Math.pow(screenWidth - position.x, 2) +
          Math.pow(screenHeight - position.y, 2)
      ),
    };

    const closest = Object.keys(distances).reduce((a, b) =>
      distances[a] < distances[b] ? a : b
    );
    setClosestCorner(closest);
  };

  useEffect(() => {
    calculateClosestCorner();
  }, [position]);

  return (
    <Wrapper>
      <DragMenuWrapper
        className={`drag-menu-wrapper ${isMenuOpen ? "active" : "inactive"}`}
        drag
        dragConstraints={{
          left: 0,
          right: window.innerWidth - 50,
          top: 0,
          bottom: window.innerHeight - 50,
        }}
        dragMomentum={false}
        onDragEnd={(e, info) => setPosition({ x: info.point.x, y: info.point.y })}
        animate={{
          width: isMenuOpen ? "100%" : "50px",
          height: isMenuOpen ? "100%" : "50px",
          borderRadius: isMenuOpen ? "25px" : "50%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <DragMenuContainer className="drag-menu-container">
          <MenuNavWrapper
            className={`menu-nav-wrapper ${isMenuOpen ? "active" : "inactive"}`}
          >
            <MenuNavContainer className="menu-nav-container">
              <ul>
                <li>Recent Project</li>
                <li>About Me</li>
                <li>Journey</li>
                <li>Interested in a custom website?</li>
              </ul>
            </MenuNavContainer>
          </MenuNavWrapper>
          <MenuBtn onClick={toggleMenu}> + </MenuBtn>
        </DragMenuContainer>
      </DragMenuWrapper>
    </Wrapper>
  );
};

export default DraggableMenu;
