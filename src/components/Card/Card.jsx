import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Card.module.scss";

const Card = ({ id, image, name = "Soon...", description = "Soon..." }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className={s.card}>
      <Link to={`/product/${id}`}>
        <img className={s.main__img} src={image} alt={name} />
      </Link>
      <h3>{name}</h3>
      <p className={s.limited__text}>{description}</p>

      <div className={s.buttons}>
        <Link to={`/product/${id}`} className={s.detail}>
          подробнее
        </Link>

        <button
          className={`${s.like} ${isLiked ? s.liked : ""}`}
          onClick={toggleLike}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="#FDDB3A"
            strokeWidth="2"
          >
            <path d="M20.84 4.61c-1.54-1.34-3.94-1.34-5.48 0l-.36.31-.36-.31c-1.54-1.34-3.94-1.34-5.48 0-1.9 1.65-1.9 4.33 0 6l5.84 5.09 5.84-5.09c1.9-1.67 1.9-4.35 0-6z" />
          </svg>
        </button>

        <Link to={`/product/${id}`}>
          <button className={s.buy}>
            <img src="/buy.svg" alt="buy" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
