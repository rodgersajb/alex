import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export const PMRoutine = () => {
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
    <div className="content">
      <div className="image-container"></div>
      <div className="container">
        <h3 className="highlighter-second">In the PM</h3>
        <p className={`${active ? "active" : ""}`}>
          “Developer hat comes off and the father/husband hat comes on where
          chaos will almost always be on the menu. Oh, and sometimes the
          hospitality hat comes on as well where steak and wine are at the
          forefront.”
        </p>
        <h3 className="highlighter-second">How Alex Relaxes</h3>
        <p ref={ref} className={`${active ? "active" : ""}`}>
          “Music always seems to key for me. Spotify once jabbed at from going
          from Kendrik Lamar to Supertramp, so I got that going for me. If not
          music, then I am catching up on one of the seventy backlogged TV shows
          with my wife, or, if the weather is nice, on the golf course where I
          remind myself that golfing is fun.”
        </p>
      </div>
    </div>
  );
};
