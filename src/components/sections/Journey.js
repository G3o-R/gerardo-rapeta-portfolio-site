import { useState, useEffect, useRef } from "react";
import {
  CardContainer,
  CardWrapper,
  Header,
  JourneyCardsContainer,
  JourneyCardsWrapper,
  JourneySection,
  TextBoxContainer,
  TextBoxWrapper,
} from "../../styles/JourneyStyles";

export default function Journey() {
  const [effect, setEffect] = useState("display");
  const journeyRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setEffect("display");
  };

  const cardsData = [
    {
      id: 1,
      title: "Why?",
      content:
        "This all started from an addiction and need to understand how things work. It began when I was a child playing with Legos, grew even more when I tore apart a washing machine so I could figure out what makes it spin, and only got more intense when I figured out I could make some pretty cool stuff with what I knew. Thus anything I could ever want, I could have, so long as I knew how to make it...",
      animation: { y: 0, x: 0, rotate: 0 },
    },
    {
      id: 2,
      title: "Flatiron",
      content:
        "I knew college wasn’t for me. I live in Arizona, home to ASU, GCU, and NAU. All good schools with amazing parties. But I didn’t feel like spending over a hundred grand to find out that alcohol is awesome. That’s what families for. Then I heard about Flatiron, saw a 6% acceptance rate and said challenge accepted.",
      animation: { y: -10, x: 30, rotate: 15 },
    },
    {
      id: 3,
      title: "Bazar",
      content:
        "My first internship was at a startup with Bazar Enterprises. Madhav if you’re reading this, I apologize for my lack of communication, I saw a butterfly. But the experience was still very valuable and taught me the process of developing a large app and especially working with a team.",
      animation: { y: -10, x: -30, rotate: -15 },
    },
    {
      id: 4,
      title: "Projects",
      content:
        "I hit a plateau at some point. I was growing linearly, at times I was just static, when I prefer exponential. Anything I did could be made with a web builder like Wix. I didn’t like that. Whatever I make, regardless of its simplicity, has to live, move, and breathe. Kind of like this one.",
      animation: { y: -10, x: 60, rotate: 30 },
    },
    {
      id: 5,
      title: "Current Day",
      content:
        "I make it a point to learn something new anytime I feel limited by what I know now. Anything I see that looks cool, I take it as a challenge to reproduce and improve upon. Anything I want to make, I make regardless of an outdated NPM package or unknown skill. I’ll figure it out.",
      animation: { y: -10, x: -60, rotate: -30 },
    },
  ];

  useEffect(() => {
    const handleDOMLoaded = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setEffect("fan");
            } else {
              setEffect("");
            }
          });
        },
        { threshold: 0.5 }
      );

      if (journeyRef.current) {
        observer.observe(journeyRef.current);
      }

      return () => {
        if (journeyRef.current) {
          observer.unobserve(journeyRef.current);
        }
      };
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMLoaded);
    } else {
      handleDOMLoaded();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMLoaded);
    };
  }, []);

  return (
    <JourneySection ref={journeyRef}>
      <Header>
        <h2>Web Dev Journey</h2>
      </Header>
      <JourneyCardsWrapper className="cards-wrapper">
        <JourneyCardsContainer
          className={`cards-container ${effect}`}
          onClick={handleMouseEnter}
        >
          {cardsData.map((cardData, index) => (
            <CardWrapper
              key={cardData.id}
              onClick={handleMouseEnter}
              className={`card-wrapper card-${index + 1}`}
              animate={
                effect === "fan"
                  ? {
                      x:
                        index === 0
                          ? 0
                          : index === 1
                          ? 30
                          : index === 2
                          ? -30
                          : index === 3
                          ? 60
                          : -60,
                      y: -30,
                      rotate:
                        index === 1
                          ? 15
                          : index === 2
                          ? -15
                          : index === 3
                          ? 30
                          : index === 4
                          ? -30
                          : 0,
                    }
                  : {
                      x: effect === "display" ? index * 320 : 0,
                      rotate: 0,
                    }
              }
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <CardContainer className="card-container">
                <TextBoxWrapper className="text-box-wrapper">
                  <TextBoxContainer className="text-box-container">
                    <h2>{cardData.title}</h2>
                    <p>{cardData.content}</p>
                  </TextBoxContainer>
                </TextBoxWrapper>
              </CardContainer>
            </CardWrapper>
          ))}
          <CardWrapper className="card-wrapper spacer">
            <CardContainer>
              <TextBoxWrapper>
                <TextBoxContainer>
                  <h2>Hi!</h2>
                  <p>
                    if you're reading this the purpose
                    of this is to provide a height to the JourneyCardsContainer
                    as changing the z-index results in the container having no
                    content to provide it's dimensions
                  </p>
                </TextBoxContainer>
              </TextBoxWrapper>
            </CardContainer>
          </CardWrapper>
        </JourneyCardsContainer>
      </JourneyCardsWrapper>
    </JourneySection>
  );
}
