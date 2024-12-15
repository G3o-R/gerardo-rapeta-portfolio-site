import React, { useState, useEffect } from "react";
import {
  DragContainer,
  DragWrapper,
  MenuBtn,
  MenuNavContainer,
  MenuNavWrapper,
  Wrapper,
} from "../styles/DraggableMenu";
import { useMediaQuery } from "react-responsive";
import { useNavigate, useLocation } from "react-router-dom";

export default function DraggableMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [closestCorner, setClosestCorner] = useState("top-left");
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const {pathname} = location

  const toggleMenu = () => {
    if (isMenuOpen) {
      setTimeout(() => setMenuVisible(false), 300);
    } else {
      setMenuVisible(true);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (sectionClass) => {
    const section = document.querySelector(sectionClass);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false)
    }
  };

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

  const navToServices = () => {
    navigate("/services")
    setIsMenuOpen(false)
  }

  const navToHome = () => {
    navigate("/")
    setIsMenuOpen(false)
  }

  return (
    <Wrapper className="outer-drag-wrapper">
      <DragWrapper
        className={`drag-wrapper`}
        drag
        dragConstraints={{
          left: 0,
          right: isMobile ? 0 : window.innerWidth - 50,
          top: isMobile ? window.innerHeight - 50 : 0,
          bottom: window.innerHeight - 50,
        }}
        onDragEnd={(e, info) =>
          setPosition({ x: info.point.x, y: info.point.y })
        }
        dragMomentum={false}
      >
        <DragContainer className="drag-container">
          <MenuNavWrapper
            className={`menu-nav-wrapper ${
              isMobile ? "bottom-left" : closestCorner
            } ${isMenuOpen ? "active" : "inactive"}`}
          >
            <MenuNavContainer
              className={`menu-nav-container ${menuVisible ? "visible" : ""}`}
            >
              <ul>
              <li onClick={() => handleScrollToSection(".projects-section")}>
                  Recent Project
                </li>
                <li onClick={() => handleScrollToSection(".about-section")}>
                  About Me
                </li>
                <li onClick={() => handleScrollToSection(".skills-section")}>
                  Skills
                </li>
                <li onClick={() => handleScrollToSection(".journey-section")}>
                  Journey
                </li>
                <li
                  onClick={() =>
                    pathname === "/services" ? navToHome() : navToServices()
                  }
                >
                  {pathname === "/services"
                    ? "Home"
                    : "Interested in a custom website?"}
                </li>
              </ul>
            </MenuNavContainer>
          </MenuNavWrapper>
          <MenuBtn
            className={`menu-button ${closestCorner}`}
            onClick={toggleMenu}
          >
            +
          </MenuBtn>
        </DragContainer>
      </DragWrapper>
    </Wrapper>
  );
}
