import {
  Home,
  ContentWrapper,
  ContentContainer,
} from "../../styles/PageStyles/HomePageStyles";
import Hero from "../Hero";
import PortfolioCard from "../PortfolioCard";

export default function HomePage() {
  return (
    <Home className="home">
      <Hero />
      <ContentWrapper>
        <ContentContainer>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </ContentContainer>
      </ContentWrapper>
    </Home>
  );
}
