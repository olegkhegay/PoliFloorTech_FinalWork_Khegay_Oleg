// CardWrap.jsx
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import s from "./CardWrap.module.scss";
import Header from "../Header/Header";
import YellowButton from "../YellowButton/YellowButton";
import MiniCategory from "../MiniCategory/MiniCategory";
import Footer from "../Footer/Footer";
import { CartContext } from "../../context/CartContext";

const CardWrap = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 1 ? count - 1 : 1);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id.toString() === id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [id]);

  if (!product) {
    return <div>Загрузка...</div>;
  }

  const handleBuy = () => {
    addToCart(product, count);
    navigate("/basket");
  };

  return (
    <div className={s.card__wrap}>
      <Header />
      <div className="container">
        <section className={s.card}>
          <div className={s.swiper__box}>
            <img src={product.image} alt={product.name} className={s.productImage} />
            <div className={s.swiper__images}>
              {/* Можно повторять изображение или использовать разные */}
              <img src={product.image} alt={product.name} className={s.productImage} />
              <img src={product.image} alt={product.name} className={s.productImage} />
              <img src={product.image} alt={product.name} className={s.productImage} />
              <img src={product.image} alt={product.name} className={s.productImage} />
            </div>
          </div>
          <div className={s.description__box}>
            <h1 className={s.title}>{product.name}</h1>
            <h3 className={s.description}>{product.description}</h3>
            <h3 className={s.reviews}>⭐⭐⭐⭐⭐ 152 отзыва</h3>
            <div className={s.price}>
              <b>{product.price * count} ₽</b>
              <s>{Math.floor(product.price * 1.1 * count)} сум</s>
            </div>
            <div className={s.box}>
              <div className={s.count}>
                <button onClick={decrementCount}>-</button>
                <p>{count}</p>
                <button onClick={incrementCount}>+</button>
              </div>
              {/* Заменяем Link на кнопку, чтобы сперва добавить в корзину, а затем перейти */}
              <YellowButton onClick={handleBuy}>Купить</YellowButton>
            </div>
            <h4 className={s.guarantee}>
              <img src="/checkicon.svg" alt="check" />
              Гарантия возврата денег на 30 дней
            </h4>
            <h3 className={s.information}>
              Артикуль:425242524252 <br />
              Класс износостойкости:33 <br />
              Толщина:8 мм <br />
              Размер панели:1200 х 190 мм <br />
              Замковая система:Нажмите кнопку Блокировки <br />
              Влагостойкость:Да <br />
              Гарантия:20 лет <br />
              Цвет:Светлый дуб
            </h3>
          </div>
        </section>
        <div className={s.mini__category}>
          <h1>Похожие товары</h1>
          <MiniCategory />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardWrap;
