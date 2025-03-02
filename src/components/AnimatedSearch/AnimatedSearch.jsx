import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Search } from "lucide-react";
import s from "./AnimatedSearch.module.scss";

const AnimatedSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(containerRef.current, { width: "200px", duration: 0.3, ease: "power2.out" });
      gsap.to(inputRef.current, { opacity: 1, width: "150px", duration: 0.3, ease: "power2.out", delay: 0.1 });
    } else {
      gsap.to(inputRef.current, { opacity: 0, width: "0px", duration: 0.2, ease: "power2.inOut" });
      gsap.to(containerRef.current, { width: "50px", duration: 0.3, ease: "power2.out", delay: 0.1 });
    }
  }, [isOpen]);

  return (
    <div className={s.searchContainer} ref={containerRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder={isOpen ? "Поиск" : ""}
        className={s.input}
      />
      <button onClick={() => setIsOpen(!isOpen)} className={s.searchButton}>
        <Search size={24}  color="white"/>
      </button>
    </div>
  );
};

export default AnimatedSearch;