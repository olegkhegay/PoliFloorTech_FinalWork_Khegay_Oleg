import React from 'react'
import s from './Yellow.module.scss'

const YellowButton = ({ children }) => {
  return (
    <>
        <button className={s.button}>{children}</button>
    </>
  )
}

export default YellowButton