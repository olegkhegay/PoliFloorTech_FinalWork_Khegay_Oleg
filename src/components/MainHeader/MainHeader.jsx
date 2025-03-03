import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import s from "./MainHeader.module.scss";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import YellowButton from "../YellowButton/YellowButton";
import Hero from "../Hero/Hero";
import MainProducts from "../MainProducts/MainProducts";
import PopularProducts from "../PopularProducts/PopularProducts";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
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
      <body className={s.body}>
        <header className={s.header}>
          <div className="container">
            <div className={s.wrap}>
              <nav className={s.nav}>
                <Link to={"/"}>
                  <img className={s.logo} src="/logodark.svg" alt="logo" />
                </Link>

                <div className={s.links}>
                  <Link to={"/"}>Главная</Link>
                  
                  <ScrollLink
                    to="mainProducts"
                    smooth={true}
                    offset={-50} 
                    duration={500} 
                  >
                    Услуги
                  </ScrollLink>

                  <HashLink smooth to="/#whyChooseUs">
                    Отзывы
                  </HashLink>

                  <HashLink smooth to="/#footer">
                    Контакты
                  </HashLink>
                </div>

                <Link to={"basket"}>
                  <button className={s.basket}>
                    <img src="/basket.svg" alt="basket" />
                  </button>
                </Link>

                <Link to={"/login"}>
                  <button className={s.profile}>
                    Войти <img src="/Profile.svg" alt="Profile" />
                  </button>
                </Link>

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
        </header>

        <div className={s.main_search}>
          <SearchBar/>
        </div>

        <Hero />
        <div id="mainProducts">
          <MainProducts />
        </div>

        <div id="popularProducts">
          <PopularProducts />
        </div>

        {isMenuOpen && (
          <div className={`${s.fullscreenMenu}`} ref={menuRef}>
            <div className={s.wrap__mobile}>
              <nav className={s.nav__mobile}>
                <Link to={"/login"}>
                  <button className={s.profile__mobile}>
                    Войти <img src="/Profile.svg" alt="Profile" />
                  </button>
                </Link>
              </nav>

              <div className={s.links}>
                <HashLink smooth  to={"#mainHeader"}>
                  Главная 
                </HashLink>
                <Link to={"basket"}>
                  Корзина
                </Link>
                <ScrollLink to="mainProducts" smooth={true} offset={-50} duration={500} >
                  Услуги
                </ScrollLink>
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
      </body>
    </>
  );
};

export default Header;
