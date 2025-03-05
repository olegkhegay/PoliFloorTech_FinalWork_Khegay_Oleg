// BasketWrap.jsx
import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import s from "./BasketWrap.module.scss";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const BasketWrap = () => {
  const navRef = useRef(null);
  const mainRef = useRef(null);

  const {
    cart,
    totalPrice,
    removeFromCart,
    clearCart,
    updateCartItemCount,
  } = useContext(CartContext);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power3.out",
      });
    }
    if (mainRef.current) {
      gsap.from(mainRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section className={s.basket}>
      <ProfileHeader />
      <div className={s.wrap__basket}>
        <nav className={s.nav} ref={navRef}>
          <input className={s.seacrh} type="text" placeholder="Поиск" />
          <Link to={"/login"}>
            <button className={s.profile__mobile}>
              Войти <img src="/Profile.svg" alt="Profile" />
            </button>
          </Link>
        </nav>

        <div className={s.main} ref={mainRef}>
          <div className={s.cards}>
            <div className={s.title}>
              <h2>Корзина</h2>
              <h3>В вашей корзине {cart.length} товар(а/ов)</h3>
            </div>

            {cart.length === 0 ? (
              <p>Ваша корзина пуста</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className={s.card}>
                  <div className={s.mainpart}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={s.productImage}
                    />
                    <div className={s.information}>
                      <div className={s.about}>
                        <h3>{item.name}</h3>
                        <h4>{item.description}</h4>
                      </div>

                    </div>
                  </div>

                  <div className={s.supportpart}>
                      <div className={s.price__wrap}>
                        <p className={s.price}>Цена: {item.price * item.count} ₽</p>
                        
                        <div className={s.countControls}>
                          <button
                            onClick={() =>
                              updateCartItemCount(item.id, item.count - 1)
                            }
                          >
                            –
                          </button>
                          <span>{item.count}</span>
                          <button
                            onClick={() =>
                              updateCartItemCount(item.id, item.count + 1)
                            }
                          >
                            +
                          </button>
                        </div>

                      </div>
                      
                      <button className={s.delete} onClick={() => removeFromCart(item.id)}>
                        <img src="./trash.svg" alt="trash" />
                      </button>

                    </div>
                </div>
              ))
            )}

            {cart.length > 0 && (
              <button className={s.delete__all} onClick={clearCart}>
                Удалить всё
              </button>
            )}
          </div>

          <div className={s.count}>
            <h2>Общая стоимость {totalPrice} ₽</h2>
            <h3>
              Налог с продаж вычисляется <br />
              при оформлении покупки <br />в регионах, где он применим
            </h3>
            <button className={s.pay}>Перейти к оплате</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketWrap;
