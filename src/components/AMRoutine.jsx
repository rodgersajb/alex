import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export const AMRoutine = () => {

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
      {/* <div className="image-container"></div> */}
      <div className="container">
        <h3 className="highlighter-contrast">In the AM</h3>
        <p ref={ref} className={`${active ? "active" : ""}`}>
          “Mornings begin with my boys Noah and Mason. We eat, we play, and then
          begin the journey to school. Afterwards I grab an espresso and
          continue to work on a project or if there isn’t one, I’m sharpening my
          current skills or learning something new. ”
        </p>
        <h3 className="highlighter-contrast">How Alex Relaxes</h3>
        <p className={`${active ? "active" : ""}`}>
          “Becoming a dev also came with a new admiration for low-fi, which will
          be playing in my headphones all day. if I’m away from the computer,
          that usually means my lab Jack and I are at the dogpark.”
        </p>
      </div>
    </div>
  );
};
