import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

const AboutGrid = () => {
  const [active, setActive] = useState(false);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [entry?.isIntersecting]);

  const contentData = [
    {
      title: "Family",
      emoji: "👨‍👩‍👧‍👦",
      text: "Not the Vin Diesel thing. Happily married to my amazing wife, Steph with whom we have two amazing boys, Noah and Mason.",
      highlightColor: "highlighter-accent",
    },
    {
      title: "Technology",
      emoji: "💻",
      text: "Fascinated with learning how things work. My transition into tech has taught me to explore often and learn constantly.",
      highlightColor: "highlighter-second",
    },
    {
      title: "Hospitality",
      emoji: "🍴",
      text: "Trained in the art of fast-paced environments, executing under pressure, keeping people happy, all with a smile.",
      highlightColor: "highlighter-contrast",
    },
  ];

  return (
    <section className="about-grid">
      <div className="flex-column">
        {contentData.map((content, index) => {
          return (
            <div
              ref={ref}
              key={index}
              className={`flex-container ${active ? "active" : ""}`}
            >
              {entry?.isIntersecting && (
                <>
                  <div className="content">
                    <h3 className={content.highlightColor}>{content.title}</h3>
                    <h3>{content.emoji}</h3>
                  </div>
                  <div className="text-container">
                    <p>{content.text}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutGrid;
