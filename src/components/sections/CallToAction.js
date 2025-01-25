import {
  BTNContainer,
  CTAWrapper,
  CTASection,
  CTAContainer,
} from "../../styles/CallToActionStyles";

export default function CallToAction() {
  return (
    <CTASection>
      <CTAWrapper>
        <CTAContainer>
          <h2 className="question">Ready To Distinguish Yourself?</h2>
          <h1 className="CTA">A Site As Unique As Your Business</h1>
          <BTNContainer>
            <a className="get-started" href="mailto:geo.rapeta@gmail.com" target="_blank">
              Get Started
            </a>
          </BTNContainer>
        </CTAContainer>
      </CTAWrapper>
    </CTASection>
  );
}
