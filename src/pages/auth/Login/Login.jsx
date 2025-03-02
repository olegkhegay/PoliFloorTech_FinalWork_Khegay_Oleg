import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import s from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import YellowButton from "../../../components/YellowButton/YellowButton";

const Login = () => {
  const navigate = useNavigate();
  const yellowBgRef = useRef(null);
  const contentRef = useRef(null);
  const yellowContentRef = useRef(null);

  useEffect(() => {
    gsap.set(yellowBgRef.current, {
      x: "0%",
      width: "50%",
      right: 0
    });

    const elements = [...contentRef.current.children].reverse();
    const yellowElements = [...yellowContentRef.current.children].reverse();
    const tl = gsap.timeline();

    // Анимация появления желтого контента снизу вверх
    yellowElements.forEach((element, index) => {
      tl.fromTo(element,
        { 
          opacity: 0, 
          y: 30,
          scale: 0.9 
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        },
        index * 0.05
      );
    });

    // Анимация появления основного контента снизу вверх
    elements.forEach((element, index) => {
      tl.fromTo(element,
        { 
          opacity: 0, 
          y: 30,
          scale: 0.9 
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        },
        index * 0.05 + yellowElements.length * 0.05
      );
    });
  }, []);

  const handleRegisterClick = () => {
    const elements = [...contentRef.current.children].reverse();
    const yellowElements = [...yellowContentRef.current.children].reverse();
    const tl = gsap.timeline();

    // Анимация исчезновения желтого контента снизу вверх
    tl.to(yellowElements, {
      opacity: 0,
      y: -30,
      scale: 0.9,
      stagger: {
        each: 0.05,
        from: "start"
      },
      duration: 0.3,
      ease: "power2.in"
    });

    // Анимация исчезновения основного контента снизу вверх
    tl.to(elements, {
      opacity: 0,
      y: -30,
      scale: 0.9,
      stagger: {
        each: 0.05,
        from: "start"
      },
      duration: 0.3,
      ease: "power2.in"
    }, "-=0.1");

    // Анимация фона
    tl.to(yellowBgRef.current, {
      x: "0%",
      width: "100%",
      duration: 0.4,
      ease: "power2.inOut"
    });

    tl.to(yellowBgRef.current, {
      width: "50%",
      x: "-100%",
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        navigate('/register');
      }
    });
  };

  return (
    <div className={s.login_page}>
      <div className={s.main__wrap}>

        <div className={s.wrap}>
          <div 
            className={s.enter}
            ref={contentRef}
          >
            <h2>Войти в систему</h2>
            <input
              className={s.email}
              type="email"
              placeholder="электронная почта"
            />
            <input
              className={s.password}
              type="password"
              placeholder="пароль"
            />
            <Link to={"forgetpassword"}>Забыли свой пароль?</Link>
            <div className={s.social__media}>
              <img src="./facebook.svg" alt="" />
              <img src="./google.svg" alt="" />
              <img src="./twitter.svg" alt="" />
              <img src="./vk.svg" alt="" />
            </div>

            <Link to={"/"}>
              <YellowButton>Войти в систему</YellowButton>
            </Link>
          </div>

          <div 
            className={s.register}
            ref={yellowBgRef}
          >
            <div ref={yellowContentRef}>
              <h1>Здравствуйте!</h1>
              <p>
                Зарегистрируйтесь, указав свои личные данные, чтобы использовать
                все функции сайта.
              </p>
              <button 
                className={s.registration}
                onClick={handleRegisterClick}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>

        </div>

        <div className={s.mobile__register}>
          <Link to={"register"}>
            <button className={s.registration_mobile}>
              Зарегистрироваться
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;
