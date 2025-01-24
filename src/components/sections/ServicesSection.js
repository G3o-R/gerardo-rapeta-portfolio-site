import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { StyledServicesSection, ServicesContainer, Header, NavButton } from "../../styles/ServicesStyles";
import { StartUpService, StandardService, AdvancedService } from "../ServiceCards";

export default function ServicesSection() {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesLength, setSlidesLength] = useState(0);
  const isLarge = useMediaQuery({
    query: "(min-width: 1560px)",
  });

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setSlidesLength(swiper.slides.length);
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const services = [
    { component: <StartUpService />, label: "Start-Up" },
    { component: <StandardService />, label: "Standard" },
    { component: <AdvancedService />, label: "Advanced" },
  ];

  return (
    <StyledServicesSection className="services-section">
      <Header className="header-container">
        <h2 className="title">Services</h2>
      </Header>
      <ServicesContainer className="services-container">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={-50}
          slidesPerView={3}
          centeredSlides={true}
          initialSlide={1}
          onSwiper={handleSwiperInit}
          onSlideChange={handleSlideChange}
          allowTouchMove={false}
        >
          {services.map((service, index) => {
            const distanceFromCenter = Math.abs(currentIndex - index);
            const zIndex = 3 - distanceFromCenter;
            const overlayOpacity = 0.1 * distanceFromCenter;
            const scale = 1 - 0.05 * distanceFromCenter;

            return (
              <SwiperSlide
                key={index}
                style={{
                  zIndex,
                  transition: "z-index 0.3s ease",
                }}
              >
                <motion.div
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                    position: "relative",
                  }}
                  animate={{ scale }}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 1)",
                      opacity: overlayOpacity,
                      zIndex: 4,
                      pointerEvents: "none",
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  {service.component}
                </motion.div>
              </SwiperSlide>
            );
          })}
          <NavButton className="swiper-button-prev"></NavButton>
          <NavButton className="swiper-button-next"></NavButton>
        </Swiper>
      </ServicesContainer>
    </StyledServicesSection>
  );
}
