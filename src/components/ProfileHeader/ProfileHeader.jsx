import React from 'react'
import s from './ProfileHeader.module.scss'
import { Link } from 'react-router-dom'

const ProfileHeader = () => {
  return (
    <>
        <section className={s.profile__header}>
            <div className={s.wrap}>
                <Link to={"/"}>
                    <img className={s.logo} src="/logolight.svg" alt="logo" />
                </Link>

                <div className={s.menu}>
                    <Link to={"/profile"}>
                        <img src="/profileHeader.svg" alt="profileHeader" />
                        Личные данные
                    </Link>

                    <Link to={"/basket"}>
                        <img src="/basket.svg" alt="basket" />
                        Корзина
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProfileHeader