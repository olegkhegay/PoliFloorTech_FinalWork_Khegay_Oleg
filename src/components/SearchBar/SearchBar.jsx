import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import s from "./SearchBar.module.scss";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Загружаем данные из products.json при монтировании
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Фильтрация подсказок при изменении searchTerm
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [searchTerm, products]);

  // Обработка клика вне компонента – скрываем подсказки
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFocus = () => {
    // Если в инпуте есть текст, показываем подсказки
    if (searchTerm.trim()) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    }
  };

  const handleSelect = (id) => {
    navigate(`/product/${id}`);
    setSearchTerm("");
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      navigate(`/product/${suggestions[0].id}`);
      setSearchTerm("");
      setSuggestions([]);
    }
  };

  return (
    <div className={s.search_container} ref={containerRef}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Поиск"
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          className={s.search_input}
        />
        <button type="submit" className={s.search_button}>
          <img src="/Search.svg" alt="Поиск" />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className={s.suggestions}>
          {suggestions.map((item) => (
            <li
              key={item.id}
              onMouseDown={(e) => e.stopPropagation()} // предотвращаем срабатывание клика вне
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

export default SearchBar;
