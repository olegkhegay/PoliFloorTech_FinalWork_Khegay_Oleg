import React from "react";
import s from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className={s.footer}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.main}>
              <Link to={'/'}>
                <img className={s.logo} src="/logolight.svg" alt="lightlogo" />
              </Link>

              <p className={s.slogan}>
                ПолиФлорТеч — прочные покрытия <br />
                для любых пространств, где стиль, <br />
                качество и долговечность идут рука об руку.
              </p>
            </div>

            <div className={s.sections}>
              <b>Разделы</b>

              <Link to={"/"}>
                <p>Главная</p>
              </Link>

              <Link to={""}>
                <p>Услуги</p>
              </Link>

              <Link to={""}>
                <p>Отзывы</p>
              </Link>

              <Link to={""}>
                <p>Каталог</p>
              </Link>

              <Link to={""}>
                <p>Личный кабинет</p>
              </Link>
            </div>

            <div className={s.company}>
              <b>Компания</b>

              <Link to={""}>
                <p>О нас</p>
              </Link>

              <Link to={""}>
                <p>Контакты</p>
              </Link>

              <Link to={""}>
                <p>Кейсы</p>
              </Link>

              <Link to={""}>
                <p>Политика</p>
              </Link>

              <Link to={""}>
                <p>Новости</p>
              </Link>
            </div>

            <div className={s.support}>
              <b>Поддержка</b>
              <Link to={""}>
                <p>Приступая к работе</p>
              </Link>

              <Link to={""}>
                <p>Справочный центр</p>
              </Link>

              <Link to={""}>
                <p>Статус сервера</p>
              </Link>

              <Link to={""}>
                <p>Сообщить об ошибке</p>
              </Link>

              <Link to={""}>
                <p>Поддержка в чате</p>
              </Link>
            </div>
          </div>

          <h3 className={s.rules}>
            Copyright © 2024 ПолиФлорТеч | Все права защищены | Условия
            использования | Политика конфиденциальности
          </h3>
        </div>
      </section>
    </>
  );
};

export default Footer;
