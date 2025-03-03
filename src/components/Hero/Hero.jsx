import React from 'react'
import YellowButton from '../YellowButton/YellowButton'
import TransparentButton from '../TransparentButton/TransparentButton'
import s from './Hero.module.scss'
import { HashLink } from 'react-router-hash-link'

const Hero = () => {
  return (
    <>
        <secton className={s.hero}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.title}>
                        <h2>
                            Ламинированный паркет, инженерная доска и наливные полы для любых технических задач
                        </h2>

                        <h4>
                            Покрытия для любых объектов: от медицинских и пищевых производств до сложных инженерных решений
                        </h4>

                        <div className={s.buttons}>
                            <HashLink smooth to={"#mainProducts"}>
                                <YellowButton>Заказать <img src="/ArrowRight.svg" alt="" /></YellowButton>
                            </HashLink>

                            <HashLink smooth to={"#whyChooseUs"}>
                                <TransparentButton>Подробнее</TransparentButton>
                            </HashLink>
                            {/* должен быть скрол вниз */}
                        </div>
                    </div>

                    
                    <img src="/Main.png" alt="Main" className={s.main_img} />
                    
                </div>
            </div>
        </secton>
    </>
  )
}

export default Hero