import React from 'react'
import Header from '../../components/Header/Header'
import Category from '../../components/Category/Category'
import s from './All.module.scss'
import Footer from '../../components/Footer/Footer'

const EngineeringModule = () => {

  const containerStyle = {
    backgroundImage: 'url("./EngineeringModuleBg.png")', // замените на нужный путь
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  return (

    
    <>
      <Header />

      <section className={s.products} style={containerStyle}>

        <div className="container">
          <div className={s.wrap}>
            <h1 className={s.title}>Инженерный модуль</h1>

            <p className={s.description}>
              многослойное напольное покрытие, сочетающее натуральную древесину и
              устойчивую основу, обеспечивая высокую прочность и стабильность. Это
              премиальный материал, который сохраняет текстуру и внешний вид
              натурального дерева и подходит для жилых и коммерческих интерьеров
            </p>

            <img className={s.yellow} src="./yellowline.png" alt="" />

            <li>
            
                Натуральность: Верхний слой выполнен из ценной породы дерева, что
                придает полу благородный вид и экологичность.
              
              <li>
                Стабильность: За счет многослойной структуры инженерная доска
                устойчива к деформации, меньше реагирует на перепады температуры и
                влажности.
              </li>
              <li>
                Простота монтажа: Доска часто оснащена замковыми соединениями, что
                упрощает и ускоряет укладку.
              </li>
              <li>
                Долговечность: Износостойкий верхний слой позволяет шлифовать и
                обновлять покрытие при необходимости.
              </li>
              <li>
                Универсальность: Подходит для укладки на систему «теплый пол» и в
                помещениях с умеренной влажностью.
              </li>
            </li>
          </div>
        </div>
      </section>

        <Category />
        <Footer/>
    </>
  )
}

export default EngineeringModule