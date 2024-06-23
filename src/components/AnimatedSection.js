import React, { useState, useEffect } from "react";

function AnimatedSection({ children, id }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const offset = rect.top + rect.height - viewportHeight;

      if (window.scroll > offset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll");
  }, [id]);

  return (
    <>
      <div
        id={id}
        className={`${
          isVisible ? "animate-fadeInUp" : "opacity-0"
        } tansition duration-500 ease-in-out`}>
        {children}
      </div>
    </>
  );
}

export default AnimatedSection;
