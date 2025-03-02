import React, { useState } from 'react';
import s from './WhyChooseUs.module.scss';

// Компонент отдельной карточки
const Card = ({ defaultImg, hoverImg, title, description, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={s.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? hoverImg : defaultImg} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className={s.why_choose_us}>
      <div className="container">
        <div className={s.wrap}>
          <h1>Почему выбирают нас?</h1>
          <h4>
            Выбирая нас, вы получаете надёжное, качественное и стильное напольное покрытие, которое прослужит долгие годы
          </h4>

          <div className={s.cards}>
            <Card
              defaultImg="/stargray.svg"
              hoverImg="/starwhite.svg"
              title="Качество и надежность"
              description="Мы работаем только с проверенными материалами и гарантируем долгий срок службы покрытия"
              alt="star"
            />

            <Card
              defaultImg="/aimgray.svg"
              hoverImg="/aimwhite.svg"
              title="Профессиональная укладка"
              description="Наши специалисты выполняют укладку любой сложности с вниманием к деталям"
              alt="aim"
            />

            <Card
              defaultImg="/heartgray.svg"
              hoverImg="/heartwhite.svg"
              title="Индивидуальный подход"
              description="Подбираем решения, учитывая пожелания клиента, чтобы создать идеальный интерьер"
              alt="heart"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
