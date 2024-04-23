import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export const useIntersectionObserver = () => {

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

      return active;

}