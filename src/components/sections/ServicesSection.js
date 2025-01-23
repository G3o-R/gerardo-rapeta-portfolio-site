import {
  HeaderWrapper,
  ServicesCardContainer,
  ServicesCardWrapper,
  StyledServicesSection,
  Services,
  ServiceWrapper,
  ServicesContainer,
  ServiceContainer,
  DescriptionContainer,
  HeaderContainer
} from "../../styles/ServicesStyles";

import {ReactComponent as AdminSVG} from "../../images/serviceSVGs/Admin.svg"
import {ReactComponent as CertificateSVG} from "../../images/serviceSVGs/Certificate.svg"
import {ReactComponent as ContactSVG} from "../../images/serviceSVGs/Contact.svg"
import {ReactComponent as FivePagesSVG} from "../../images/serviceSVGs/FivePages.svg"
import {ReactComponent as PageSVG} from "../../images/serviceSVGs/Page.svg"
import {ReactComponent as PaintSVG} from "../../images/serviceSVGs/Paint.svg"
import {ReactComponent as ThreePagesSVG} from "../../images/serviceSVGs/ThreePages.svg"
import singleDollar from "../../images/serviceSVGs/single-dollar.jpg"
import doubleDollar from "../../images/serviceSVGs/double-dollar.png"
import tripleDollar from "../../images/serviceSVGs/triple-dollar.png"

import StickmanRunningGif from "../../images/serviceSVGs/stickman-running.gif"

export default function ServicesSection(){
  return (
    <StyledServicesSection className="services-section">
      <ServicesContainer className="services-container">
        {/* start-up */}
        <ServicesCardWrapper className="services-card-wrapper start-up">
          <ServicesCardContainer className="services-card-container">
            <HeaderWrapper className="start-up-header-container start-up">
              <HeaderContainer>
                <img src={singleDollar} alt="price symbol starting" />
              <h2>Start-up</h2>
              </HeaderContainer>
            </HeaderWrapper>
            <Services className="services">

                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container">
                      <PageSVG />
                      <DescriptionContainer className="description-container align-right">
                        <p>Single Page Website</p>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>

                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container row-reverse">
                      <PaintSVG />
                      <DescriptionContainer className="description-container align-left">
                        <p>Custom Unique Design</p>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>

                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container">
                    <CertificateSVG />
                      <DescriptionContainer className="description-container align-right">
                        <p>SSL certificate included</p>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>
                
                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container">
                    <DescriptionContainer className="description-container pricing">
                        <p>Total cost $300</p>
                        <ul>
                          <li>$100 down payment upon agreement of the design.</li>
                          <li>$100 payments for the next <strong>two</strong> consecutive months.</li>
                        </ul>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>
                
            </Services>
          </ServicesCardContainer>
        </ServicesCardWrapper>
        {/* standard */}
        <ServicesCardWrapper className="services-card-wrapper standard">
          <ServicesCardContainer className="services-card-container">
            <HeaderWrapper className="start-up-header-container standard">
            <HeaderContainer>
                <img src={doubleDollar} alt="standard price symbol" />
              <h2>Standard</h2>
              </HeaderContainer>
            </HeaderWrapper>
            <Services className="services">

                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container">
                      <ThreePagesSVG />
                      <DescriptionContainer className="description-container align-right">
                        <p>Up to three pages</p>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>

                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container row-reverse">
                      <ContactSVG />
                      <DescriptionContainer className="description-container align-left">
                        <p>Contact form</p>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>

                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container">
                    {/* <CertificateSVG /> */}
                    <img src={StickmanRunningGif} alt="basic animations gif" className="stickman-gif"/>
                      <DescriptionContainer className="description-container align-right">
                        <p>Basic animations</p>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>

                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container">
                      <DescriptionContainer className="description-container all-including">
                        <p>Total cost $300</p>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>
                
                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container">
                      <DescriptionContainer className="description-container pricing">
                        <p>Total cost $1200</p>
                        <ul>
                          <li>$300 down payment upon agreement of the design.</li>
                          <li>$450 payments for the next <strong>two</strong> consecutive months.</li>
                        </ul>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>
                
            </Services>
          </ServicesCardContainer>
        </ServicesCardWrapper>
        {/* Advanced */}
        <ServicesCardWrapper className="services-card-wrapper advanced">
          <ServicesCardContainer className="services-card-container">
            <HeaderWrapper className="start-up-header-container advanced">
            <HeaderContainer>
                <img src={tripleDollar} alt="standard price symbol" />
              <h2></h2>
              </HeaderContainer>
            </HeaderWrapper>
            <Services className="services">

                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container">
                      <FivePagesSVG />
                      <DescriptionContainer className="description-container align-right">
                        <p>Up to five pages</p>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>

                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container row-reverse">
                      <AdminSVG />
                      <DescriptionContainer className="description-container align-left">
                        <p>Admin Panel</p>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>

                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container">
                    <img src={StickmanRunningGif} alt="basic animations gif" className="stickman-gif"/>
                      <DescriptionContainer className="description-container align-right">
                        <p>Advanced animations</p>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>

                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container">
                      <DescriptionContainer className="description-container all-including">
                        <p>As well as everything from the standard tier</p>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>
                
                <ServiceWrapper className="service-wrapper">
                    <ServiceContainer className="service-container">
                      <DescriptionContainer className="description-container pricing">
                        <p>Total cost $1500+</p>
                        <ul>
                          <li>$500 down payment upon agreement of the design.</li>
                          <li>The remaining balance divided into <strong>two</strong> equal monthly payments</li>
                        </ul>
                      </DescriptionContainer>
                    </ServiceContainer>
                </ServiceWrapper>
                
            </Services>
          </ServicesCardContainer>
        </ServicesCardWrapper>
      </ServicesContainer>
    </StyledServicesSection>
  );
}
