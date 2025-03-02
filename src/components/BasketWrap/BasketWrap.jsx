import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import s from "./BasketWrap.module.scss";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import { Link } from "react-router-dom";

const BasketWrap = () => {
  const navRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    // Анимация навигационного блока: плавное появление сверху
    if (navRef.current) {
      gsap.from(navRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power3.out",
      });
    }

    // Анимация основного содержимого: последовательное появление с задержкой
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
    <>
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
            <div className={s.box}>
              <div className={s.cards}>
                <div className={s.title}>
                  <h2>Корзина</h2>
                  <h3>В вашей корзине 0 товаров</h3>
                </div>

                <button className={s.delete}>Удалить всё</button>
              </div>
            </div>

            <div className={s.count}>
              <h2>Общая стоимость 0 ₽</h2>
              <h3>
                Налог с продаж вычисляется <br />
                при оформлении покупки <br />в регионах, где он применим
              </h3>
              <button className={s.pay}>Перейти к оплате</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BasketWrap;
