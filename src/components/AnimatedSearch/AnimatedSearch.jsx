import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import s from "./AnimatedSearch.module.scss";

const AnimatedSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // 1. Загружаем товары из products.json
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // 2. Фильтрация при вводе
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions([]);
    } else {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [searchTerm, products]);

  // 3. Анимация открытия/закрытия
  useEffect(() => {
    if (isOpen) {
      gsap.to(containerRef.current, {
        width: "350px",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(inputRef.current, {
        opacity: 1,
        width: "150px",
        zIndex: "3",
        display: "block",
        duration: 0.3,
        ease: "power2.out",
        delay: 0.1,
      });
    } else {
      gsap.to(inputRef.current, {
        opacity: 0,
        width: "0px",
        zIndex: "0",
        display: "none",
        duration: 0.2,
        ease: "power2.inOut",
      });
      gsap.to(containerRef.current, {
        width: "50px",
        duration: 0.3,
        ease: "power2.out",
        delay: 0.1,
      });
      setSearchTerm("");
      setSuggestions([]);

      
    }
  }, [isOpen]);

  // 4. Клик вне компонента — закрываем список
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 5. Обработчики
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (id) => {
    navigate(`/product/${id}`);
    setSearchTerm("");
    setSuggestions([]);
    setIsOpen(false); // при необходимости можно оставлять открытым
  };

  const handleFocus = () => {
    // Если поле уже открыто и что-то введено, показываем подсказки
    if (isOpen && searchTerm.trim()) {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    }
  };

  return (
    <div className={s.searchContainer} ref={containerRef}>
      
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="Поиск"
        className={s.input}
      />
      <button onClick={toggleOpen} className={s.searchButton}>
        <Search size={24} color="white" />
      </button>

      {/* Если есть совпадения и пользователь что-то ввёл */}
      {suggestions.length > 0 && searchTerm && (
        <ul className={s.suggestions}>
          {suggestions.map((item) => (
            <li
              key={item.id}
              onMouseDown={(e) => e.stopPropagation()} // чтобы не скрывалось при клике
              onClick={() => handleSelect(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnimatedSearch;
