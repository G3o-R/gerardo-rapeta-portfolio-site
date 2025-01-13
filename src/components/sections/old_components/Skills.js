import {
  Header,
  SkillsContainer,
  SkillsSection,
  SkillCardWrapper,
  SkillCardContainer,
  TextBoxWrapper,
  TextBoxContainer,
  NavButton,
} from "../../styles/SkillsStyles";

import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Skills() {
  const swiperRef = useRef(null);
  const isLarge = useMediaQuery({
    query: "(min-width: 668px)",
  });

  return (
    <SkillsSection className="skills-section">
      <Header className="header-container">
        <h2>Skills</h2>
      </Header>
      <SkillsContainer className="skills-container">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={10}
          slidesPerView={isLarge ? 2 : 1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <SkillCardWrapper className="card-wrapper">
              <SkillCardContainer className="card-container">
                <TextBoxWrapper className="text-wrapper">
                  <TextBoxContainer className="text-container">
                    <h2>Technical</h2>
                    <ul>
                      <li>JavaScript/React</li>
                      <li>Ruby On Rails</li>
                      <li>Python/Django</li>
                      <li>SQL</li>
                      <li>
                        Figma - <span>learned just for this website</span>
                      </li>
                    </ul>
                  </TextBoxContainer>
                </TextBoxWrapper>
              </SkillCardContainer>
            </SkillCardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <SkillCardWrapper>
              <SkillCardContainer>
                <TextBoxWrapper>
                  <TextBoxContainer>
                    <h2>Soft</h2>
                    <ul>
                      <li>Fast learner</li>
                      <li>Adaptable</li>
                      <li>Excellent pattern recognition</li>
                      <li>Team player</li>
                    </ul>
                  </TextBoxContainer>
                </TextBoxWrapper>
              </SkillCardContainer>
            </SkillCardWrapper>
          </SwiperSlide>
          <NavButton className="swiper-button-prev"></NavButton>
          <NavButton className="swiper-button-next"></NavButton>
        </Swiper>
      </SkillsContainer>
    </SkillsSection>
  );
}
