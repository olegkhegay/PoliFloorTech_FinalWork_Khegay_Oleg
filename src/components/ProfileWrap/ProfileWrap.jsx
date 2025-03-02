import React, { useRef, useEffect } from "react";
import s from "./ProfileWrap.module.scss";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const ProfileWrap = () => {
  // Реф для навигации (поисковая строка + кнопка "Войти")
  const navRef = useRef(null);
  // Реф для основного содержимого (блоки с информацией)
  const wrapRef = useRef(null);

  useEffect(() => {
    // Анимируем навигационный блок: плавное появление, смещение сверху
    if (navRef.current) {
      gsap.from(navRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power3.out",
      });
    }
    // Анимируем содержимое блока, все дочерние элементы wrap
    if (wrapRef.current) {
      gsap.from(wrapRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <>
      <section className={s.profile__wrap}>
        <ProfileHeader />

        <div className={s.main__wrap}>
          <nav className={s.nav} ref={navRef}>
            <input className={s.seacrh} type="text" placeholder="Поиск" />

            <Link to={"/login"}>
              <button className={s.profile__mobile}>
                Войти <img src="/Profile.svg" alt="Profile" />
              </button>
            </Link>
          </nav>

          <div className={s.wrap} ref={wrapRef}>
            <div className={s.main__information}>
              <h3>Имя и фамилия:</h3>
              <input className="input" type="text" placeholder="Имя" />
              <input className="input" type="text" placeholder="Фамилия" />

              <h3>Дата рождения:</h3>
              <input className="input" type="date" placeholder="2000.05.28" />

              <h3>Контактные данные:</h3>
              <input
                className="input"
                type="email"
                placeholder="poliflrortech@gmail.com"
              />
              <input
                className="input"
                type="number"
                placeholder="998 90 123 12 12"
              />

              <button className={s.save}>Сохранить изменения</button>
            </div>

            <div className={s.change__password}>
              <h3>Изменения пароля</h3>

              <input
                type="password"
                className="input"
                placeholder="Старый пароль"
              />
              <input
                type="password"
                className="input"
                placeholder="Новый пароль"
              />
              <input
                type="password"
                className="input"
                placeholder="Повторите новый пароль"
              />

              <button className={s.save}>Сохранить изменения</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileWrap;
