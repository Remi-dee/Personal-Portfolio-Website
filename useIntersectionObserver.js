import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  });

  useEffect(() => {
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.remove(targetRef.current);
      }
    };
  }, [observer]);

  return [targetRef, isVisible];
};

export default useIntersectionObserver;
