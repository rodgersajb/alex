import { AboutCard } from "./AboutCard";


const AboutGrid = () => {
  

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
           <AboutCard key={index}
            props={content}/>
          );
        })}
      </div>
    </section>
  );
};

export default AboutGrid;
