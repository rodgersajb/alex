const AboutGrid = () => {
  return (
    <section className="about-grid">
      <div className="flex-column">
        <div className="flex-container">
          <div className="content">
            <h3 className="highlighter-accent">Family</h3>
            <h3>👨🏻‍👩🏻‍👧🏻‍👦🏻</h3>
          </div>
          <div className="text-container">
            <p>
              Not the Vin Diesel thing. Happily married to my amazing wife,
              Steph with whom we have two amazing boys, Noah and Mason.
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div className="content">
            <h3 className="highlighter-second">Technology</h3>
            <h3>💻</h3>
          </div>
        <div className="text-container">
          <p>
            Fascinated with learning how things work. My transition into tech
            has taught me to explore often and learn constantly.
          </p>
        </div>
        </div>
        <div className="flex-container">
          <div className="content">
            <h3 className="highlighter-contrast">Hospitality</h3>
            <h3>🍴</h3>
          </div>
        <div className="text-container">
          <p>
            Trained in the art of fast-paced environments, executing under
            pressure, keeping people happy, all with a smile.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGrid;
