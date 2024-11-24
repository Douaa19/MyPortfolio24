import React, { useState, useEffect } from "react";

function AnimatedSection({ children, id }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      if (section && !hasAnimated) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top < viewportHeight && rect.bottom > 0) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id, hasAnimated]);

  return (
    <>
      <div
        id={id}
        className={`${
          isVisible ? "animate-fadeInUp" : "opacity-0"
        } transition duration-500 ease-in-out flex justify-center items-center`}>
        {children}
      </div>
    </>
  );
}

export default AnimatedSection;
