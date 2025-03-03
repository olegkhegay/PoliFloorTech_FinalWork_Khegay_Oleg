// Пример: Comments.jsx
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./Comments.module.scss";

function Comments() {
  // 1. Создаём массив "дефолтных" комментариев:
  const defaultComments = [
    {
      text: "Сделал наливные полы в производственном помещении, все идеально. Пол прочнее, устойчивее к химическим воздействиям и долговечный.",
      rating: 5
    },
    {
      text: "Заказывал инженерную доску для офиса, все прошло гладко. Подобрали оттенок, идеально вписывается в интерьер и выглядит очень стильно.",
      rating: 5
    },
    {
      text: "Выбрался ламинированный паркет, сотрудники помогли с выбором и дали советы. Укладка быстрая, результат — стильный и дорогой вид!",
      rating: 5
    },
    {
      text: "Отличная компания! Заказывал наливные полы для кухни и ванной, не подвели. Ровные полы, уборка после проекта. Рекомендую за качество и сервис!",
      rating: 5
    },
    {
      text: "Отличная компания! Заказывал наливные полы для кухни и ванной, не подвели. Ровные полы, уборка после проекта. Рекомендую за качество и сервис!",
      rating: 5
    }
  ];

  // 2. Считываем из localStorage, если там пусто — используем defaultComments:
  const storedComments = JSON.parse(localStorage.getItem("comments"));
  const initialComments = storedComments && storedComments.length
    ? storedComments
    : defaultComments;

  // А дальше всё как у вас:
  const [comments, setComments] = useState(initialComments);
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [hover, setHover] = useState(0);
  const formRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showForm &&
        formRef.current &&
        !formRef.current.contains(event.target)
      ) {
        setShowForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() === "" || rating === 0) return;
    const newComment = { text: commentText, rating };
    setComments([...comments, newComment]);
    setCommentText("");
    setRating(0);
    setHover(0);
    setShowForm(false);
  };

  const handleDelete = (indexToDelete) => {
    setComments(comments.filter((_, index) => index !== indexToDelete));
  };

  const renderStars = (count) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={index < count ? `${s.star} ${s.selected}` : s.star}
      >
        &#9733;
      </span>
    ));
  };

  return (
    <div className={s.commentsContainer}>
      <div className={s.wrap}>
        <div className={s.title}>
          <h2>Что говорят наши клиенты</h2>
          <h3>
            Отзывы о качестве и надежности нашей продукции: реальные <br />
            мнения клиентов на популярные товары нашей компании, <br />
            которые доверили нам комфорт и долговечность своих полов
          </h3>
        </div>
        {!showForm && (
          <button
            className={s.openFormButton}
            onClick={() => setShowForm(true)}
          >
            Оставить отзыв →
          </button>
        )}
      </div>

      {showForm && (
        <form ref={formRef} className={s.commentForm} onSubmit={handleSubmit}>
          <button
            type="button"
            className={s.closeButton}
            onClick={() => setShowForm(false)}
          >
            &times;
          </button>
          <textarea
            className={s.textarea}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Введите ваш комментарий..."
            rows="4"
          />
          <div className={s.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= (hover || rating) ? `${s.star} ${s.selected}` : s.star
                }
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <button type="submit" className={s.submitButton}>
            Добавить комментарий
          </button>
        </form>
      )}

      {comments.length > 0 && (
        <div className={s.swiperContainer}>
          <Swiper
            spaceBetween={20}
            slidesPerView={Math.min(comments.length, 4)}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={comments.length > 4}
            speed={600}
            watchOverflow={true}
            breakpoints={{
              320: { slidesPerView: Math.min(comments.length, 1) },
              640: { slidesPerView: Math.min(comments.length, 2) },
              1024: { slidesPerView: Math.min(comments.length, 3) },
            }}
            modules={[Pagination, Autoplay]}
          >
            {comments.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={s.commentCard}>
                  <div className={s.commentRating}>
                    {renderStars(item.rating)}
                  </div>
                  <div className={s.commentText}>{item.text}</div>
                  <button
                    className={s.deleteButton}
                    onClick={() => handleDelete(index)}
                  >
                    Удалить
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default Comments;
