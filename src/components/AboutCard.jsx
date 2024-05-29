import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export const AboutCard = (props) => {
  const content = props.props;
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

  return (
    <div ref={ref} className={`flex-container ${active ? "active" : ""}`}>
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
};
