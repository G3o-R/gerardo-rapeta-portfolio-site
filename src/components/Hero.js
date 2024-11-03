import { useState, useEffect, useRef } from "react";
import { 
  HeroSliderOverlay,
  OverlayTextWrapper,
  SlideBackground,
  SlideWrapper,
  HeroSlider,
  HeroSliderWrapper,
  SliderMenuNavWrapper,
  SliderMenuNavContainer,
 } from "../styles/HeroStyles";

 import codeBackground from "../images/code-background-image.jpg"

export default function Hero(){

  const [ activeIndex, setActiveIndex ] = useState(0)
  const intervalRef = useRef(null);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
//     }, 5000);

//     return () => clearInterval(intervalRef.current);
//   }, []);

  function handleSelect(e){
    let i = parseInt(e.target.id);
    setActiveIndex(i);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  return (
    <HeroSlider>
      <HeroSliderWrapper>
        <HeroSliderOverlay>
          <OverlayTextWrapper>
            <h1>Text Here</h1>
            <h2>text here</h2>
          </OverlayTextWrapper>
        </HeroSliderOverlay>

        <SlideWrapper
          className={activeIndex === 0 ? "active" : "inactive"}
          id="slide-1"
        >
          <SlideBackground>
            <img src={codeBackground} alt="don't know yet" />
          </SlideBackground>
        </SlideWrapper>

        {/* <SliderMenuNavWrapper>
          <SliderMenuNavContainer>
            <ul>
              <li

              ></li>
              <li
 
              ></li>
              <li

              ></li>
            </ul>
          </SliderMenuNavContainer>
        </SliderMenuNavWrapper> */}
      </HeroSliderWrapper>
    </HeroSlider>
  );
}