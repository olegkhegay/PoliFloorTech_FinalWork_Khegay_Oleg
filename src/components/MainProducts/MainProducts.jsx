import React from 'react'
import s from './MainProducts.module.scss'
import TransparentButton from '../TransparentButton/TransparentButton'
import { Link } from 'react-router-dom'

const MainProducts = () => {
  return (
    <>
        <section className={s.main_products}>
            <div className="container">
                <div className={s.wrap}>
                    <h1 className={s.title}>
                        Выберите идеальное покрытие для вашего пространства
                    </h1>

                    <h3 className={s.content}>
                        Широкий ассортимент напольных покрытий и лестниц для любого стиля и нагрузки
                    </h3>

                    <div className={s.cards}>

                        <div className={s.card}>
                            <img src="/SelfLevelingFloors.png" alt="" />
                            <div className={s.description}>
                                <h3>Наливные полы</h3>
                                <p>Ровное и прочное покрытие для любых помещений, стойкое к нагрузкам и химии</p>
                                <Link to={"selflevelingfloors"}>
                                    <TransparentButton>Подробнее</TransparentButton>
                                </Link>
                            </div>

                        </div>

                        <div className={s.card}>
                            <img src="/Laminatedparquet.png" alt="" />
                            <div className={s.description}>
                                <h3>Ламинированный паркет</h3>
                                <p>Доступное покрытие с эффектом дерева, устойчивое к влаге и царапинам</p>
                                <Link to={"laminateflooring"}>
                                    <TransparentButton>Подробнее</TransparentButton>
                                </Link>
                            </div>
                        </div>

                        <div className={s.card}>
                            <img src="/Engineeringboard.png" alt="" />
                            <div className={s.description}>
                                <h3>Инженерная доска</h3>
                                <p>Натуральное покрытие премиум-класса, устойчивое к деформации, с богатой палитрой цветов</p>
                                <Link to={"engineeringboard"}>
                                    <TransparentButton>Подробнее</TransparentButton>
                                </Link>
                            </div>
                        </div>

                        <div className={s.card}>
                            <img src="/Engineeringboard.png" alt="" />
                            <div className={s.description}>
                                <h3>Инженерный модуль</h3>
                                <p>Модульное покрытие с уникальными узорами для стильного и индивидуального интерьера</p>
                                <Link to={"engineeringmodule"}>
                                    <TransparentButton>Подробнее</TransparentButton>
                                </Link>
                            </div>
                        </div>

                        <div className={s.card}>
                            <img src="/Engineeringtree.png" alt="" />
                            <div className={s.description}>
                                <div className={s.text}>
                                    <h3>Инженерная ёлка</h3>

                                </div>
                                <p>Покрытие, уложенное «ёлочкой», придаёт интерьеру классический и стильный вид</p>
                                <Link to={"engineeringchristmastree"}>
                                    <TransparentButton>Подробнее</TransparentButton>
                                </Link>
                            </div>
                        </div>

                        <div className={s.card}>
                            <img src="/Stairs.png" alt="" />
                            <div className={s.description}>
                                <h3>Лестницы</h3>
                                <p>Надежные конструкции с отделкой под любой интерьер, для соединения этажей</p>
                                <Link to={"stairs"}>
                                    <TransparentButton>Подробнее</TransparentButton>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MainProducts