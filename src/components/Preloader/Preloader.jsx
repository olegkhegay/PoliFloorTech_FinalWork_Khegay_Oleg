import React from "react";
import s from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <div className={s.wrapper}>
        <div className={s.frame}></div>
        <img src="/Preloader.svg" alt="Preloader" className={s.image} />
      </div>
    </div>
  );
};

export default Preloader;
