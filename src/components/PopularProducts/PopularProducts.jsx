import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import s from './PopulaProducts.module.scss';

const PopularProducts = () => {
  return (
    <section className={s.popular_products}>
      <div className="container">
        <div className={s.wrap}>

          <h1>Популярные товары для стильного и надежного интерьера</h1>

          <Swiper
          style={{ position: 'relative' }}
          spaceBetween={25}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          speed={600}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]} 
          >
            <SwiperSlide>
              <img className={s.none} src="/swiper1.png" alt="Product 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.none} src="/swiper2.png" alt="Product 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.none} src="/swiper3.png" alt="Product 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.none} src="/swiper4.png" alt="Product 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.none} src="/swiper5.png" alt="Product 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={s.none} src="/swiper6.png" alt="Product 6" />
            </SwiperSlide>
          </Swiper>

          <div className={s.title}>

            <p>Выберите лучшие покрытия и материалы для вашего пространства среди наших бестселлеров</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
