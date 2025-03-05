import React, { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import AnimatedSearch from "../AnimatedSearch/AnimatedSearch";
import { gsap } from "gsap";

const Header = () => {
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current.children, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      navRef.current &&
      !navRef.current.contains(event.target)
    ) {
      closeMenu();
    }
  };

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      onComplete: () => setIsMenuOpen(false),
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5 }
      );
    } else {
      if (menuRef.current) {
        gsap.set(menuRef.current, { x: "100%", opacity: 0 });
      }
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={s.header}>
        <div className="container">
          <div className={s.wrap}>
            <nav className={s.nav} ref={navRef}>
              <Link to={"/"}>
                <img className={s.logo} src="/logodark.svg" alt="logo" />
              </Link>

              <div className={s.links}>
                <Link to={"/"}>Главная</Link>
                <HashLink smooth to="/#mainProducts">
                  Услуги
                </HashLink>
                <HashLink smooth to="/#whyChooseUs">
                  Отзывы
                </HashLink>
                <HashLink smooth to="/#footer">
                  Контакты
                </HashLink>
              </div>

              <div className={s.buttons}>
                <AnimatedSearch />
                <Link to={"/basket"}>
                  <button className={s.basket}>
                    <img src="/basket.svg" alt="basket" />
                  </button>
                </Link>
                <Link to={"/profile"}>
                  <button className={s.profile}>
                    <img src="/profileHeader.svg" alt="profileHeader" />
                  </button>
                </Link>
              </div>

              <div className={s.burger_menu}>
                <a className={s.square} href="#" onClick={toggleMenu}>
                  <div className={s.burgerwrap}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </div>
            </nav>
          </div>
        </div>

        {isMenuOpen && (
          <div className={s.fullscreenMenu} ref={menuRef}>
            <div className={s.wrap__mobile}>
              <nav className={s.nav__mobile}>
                <Link to={"/login"}>
                  <button className={s.profile__mobile}>
                    Войти <img src="/Profile.svg" alt="Profile" />
                  </button>
                </Link>
              </nav>

              <div className={s.links}>
                <HashLink smooth to={"#mainHeader"}>
                  Главная
                </HashLink>
                <Link to={"/profile"}>Личный <br /> Кабинет</Link>
                <Link to={"/basket"}>Корзина</Link>
                <HashLink smooth to="mainProducts">
                  Услуги
                </HashLink>
                <HashLink smooth to="/#comments">
                  Отзывы
                </HashLink>
                <HashLink smooth to="/#footer">
                  Контакты
                </HashLink>
              </div>

            </div>

            <div className={s.number__mobile}>
              <h3>+998901351340</h3>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
