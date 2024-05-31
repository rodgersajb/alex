import { useState, useEffect } from "react";

import { useIntersectionObserver } from "@uidotdev/usehooks";

export const ProjectCard = (cards) => {
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

  const card = cards.cards;
  const stacks = card.stack || [];
  const icons = card.icons || [];

  return (
    <>
      <div ref={ref} className={`${card.class} ${active ? "active" : ""} `}>
        <div className="image-container">
          <img src={card.image} alt="" />
        </div>
        <div className="content">
          <h3 className={card.highlighter}>{card.title}</h3>
          <ul className="stack">
            {stacks.map((stack, index) => {
              return <li key={index}>{stack}</li>;
            })}
          </ul>

          <p>{card.content}</p>

          <ul className="icons">
            {icons.map((icon, index) => {
              return (
                <li key={index}>
                  <a href={icon.props.live}>
                    {icon.key}
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

