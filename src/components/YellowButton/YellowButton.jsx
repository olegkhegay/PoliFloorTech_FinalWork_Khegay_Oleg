import React from 'react'
import s from './Yellow.module.scss'

const YellowButton = ({ children, onClick }) => {
  return (
    <>
        <button onClick={onClick} className={s.button}>{children}</button>
    </>
  )
}

export default YellowButton