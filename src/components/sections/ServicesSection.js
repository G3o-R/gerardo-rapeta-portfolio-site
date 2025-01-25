import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { StyledServicesSection, ServicesContainer, Header, NavButton, HostingInfoWrapper, HostingInfoContainer } from "../../styles/ServicesStyles";
import { StartUpService, StandardService, AdvancedService } from "../ServiceCards";

export default function ServicesSection() {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesLength, setSlidesLength] = useState(0);
  const isLarge = useMediaQuery({
    query: "(min-width: 1440px)",
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
          centeredSlides={isLarge ? false : true}
          initialSlide={0}
          onSwiper={handleSwiperInit}
          onSlideChange={handleSlideChange}
          // allowTouchMove={false}
        >
          {services.map((service, index) => {
            const distanceFromCenter = Math.abs(currentIndex - index);
            const zIndex = 3 - distanceFromCenter;
            const overlayOpacity = 0.1 * distanceFromCenter;
            const scale = .9 + 0.05 * distanceFromCenter;

            return (
              <SwiperSlide
                key={service.label}
                style={{
                  zIndex,
                  transition: "z-index 0.3s ease",
                }}
                className="my-swiper-slide"
              >
                <motion.div
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                    position: "relative",
                  }}
                  animate={ isLarge ? "" : {scale} }
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
                      opacity:  isLarge ? 0 : overlayOpacity,
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
      <HostingInfoWrapper>
        <HostingInfoContainer>
          <strong>Prices do not include purchase of domain name</strong>
          <p>$10/month hosting fee starting from the day the website is published</p>
          <p>For any questions about prices or services not specifically listed please ask <a href="mailto:geo.rapeta@gmail.com" target="_blank">here.</a></p>
        </HostingInfoContainer>
      </HostingInfoWrapper>

    </StyledServicesSection>
  );
}
