import {
  PortfolioContainer,
  PortfolioWrapper,
  ProjectAbout,
  ProjectInfo,
} from "../styles/PortfolioCardStyles";

export default function PortfolioCard({
  name = "name here",
  technolgiesUsedArr = [],
  text = "",
}) {
  const technologiesUsed = technolgiesUsedArr.map((technologyUsed) => (
    <li>{technologyUsed}</li>
  ));

  return (
    <PortfolioWrapper>
      <PortfolioContainer>
        <ProjectInfo>
          <h1>{name}</h1>
          <label>Technologies Used:</label>
          <ul>{technologiesUsed}</ul>
        </ProjectInfo>
        <ProjectAbout>
          <p>{text}</p>
        </ProjectAbout>
      </PortfolioContainer>
    </PortfolioWrapper>
  );
}
