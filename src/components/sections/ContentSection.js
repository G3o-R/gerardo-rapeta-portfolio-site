import {
  ContentContainer,
  ImageContainer,
  ImageWrapper,
  InfoCardContainer,
  InfoCardWrapper,
  StyledSection,
  SubHeader,
  Text,
  NavButton,
  SwiperContainer,
} from "../../styles/ContentSectionStyles";
import FlatironCert from "../../images/FlatironCertImage.png";
import {
  ORCCard,
  SaldanasGarageCard,
  GerardoRapetaPortfolioCard,
} from "../PortfolioCards";

import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ContentSection() {
  const swiperRef = useRef(null);
  const isMobile = useMediaQuery({
    query: "(min-width: 668px)",
  });

  return (
    <StyledSection className="content-section">
      <ContentContainer className="content-container">
        <InfoCardWrapper className="info-card-wrapper about-me">
          <InfoCardContainer className="info-card-container">
            <SubHeader>About Me</SubHeader>
            <Text className="about-me">
              Graduated from Flatiron School’s Software Engineering Flex
              Program. I always knew I wanted to be an engineer even when I was
              a child. Legos, Transformers, and The Matrix definitely nurtured
              that passion. My crux was that I didn’t know which branch of
              engineering best suited me, being that I wanted to build
              everything, be it planes, cars, robots, or wooden tables. But
              luckily for me almost everything requires a computer, except for
              wooden tables...
            </Text>
          </InfoCardContainer>
        </InfoCardWrapper>
        {/* clicking on this should open an overlay to completely display Certification */}
        <InfoCardWrapper className="info-card-wrapper flatiron-cert">
          <InfoCardContainer className="info-card-container">
            <ImageWrapper className="image-wrapper flatiron-cert">
              <ImageContainer className="image-container">
                <img src={FlatironCert} alt="" />
              </ImageContainer>
            </ImageWrapper>
          </InfoCardContainer>
        </InfoCardWrapper>
        {isMobile ? (
          <>
            <SaldanasGarageCard />
            <ORCCard />
            <GerardoRapetaPortfolioCard />
          </>
        ) : null}
      </ContentContainer>
      {isMobile ? null : (
        <SwiperContainer className="swiper-container">
          {/* <SubHeader className="recent-projects">Recent Projects</SubHeader> */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={10}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <SaldanasGarageCard />
            </SwiperSlide>
            <SwiperSlide>
              <ORCCard />
            </SwiperSlide>
            <SwiperSlide>
              <GerardoRapetaPortfolioCard />
            </SwiperSlide>
            <NavButton className="swiper-button-prev"></NavButton>
            <NavButton className="swiper-button-next"></NavButton>
          </Swiper>
        </SwiperContainer>
      )}
      {/* <Projects /> */}
    </StyledSection>
  );
}
