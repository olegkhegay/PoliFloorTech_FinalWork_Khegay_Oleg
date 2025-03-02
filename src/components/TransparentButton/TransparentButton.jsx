import React from 'react'
import s from './TransparentButton.module.scss'

const TransparentButton = ({ children }) => {
  return (
    <>
        <button className={s.button}>{children}</button>
    </>
  )
}

export default TransparentButton