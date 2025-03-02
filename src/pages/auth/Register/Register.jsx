import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TransparentButton from "../../../components/TransparentButton/TransparentButton";
import { Link, useNavigate } from "react-router-dom";
import s from "./Register.module.scss";
import YellowButton from "../../../components/YellowButton/YellowButton";
import gsap from "gsap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [confirmPasswordSuccess, setConfirmPasswordSuccess] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const yellowBgRef = useRef(null);
  const contentRef = useRef(null);
  const yellowContentRef = useRef(null);

  useEffect(() => {
    gsap.set(yellowBgRef.current, {
      x: "0%",
      width: "50%",
      left: 0,
    });

    const elements = [...contentRef.current.children].reverse();
    const yellowElements = [...yellowContentRef.current.children].reverse();
    const tl = gsap.timeline({ delay: 0.4 });

    yellowElements.forEach((element, index) => {
      tl.fromTo(
        element,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        },
        index * 0.05
      );
    });

    elements.forEach((element, index) => {
      tl.fromTo(
        element,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        },
        index * 0.05 + yellowElements.length * 0.05
      );
    });
  }, []);

  const handleLoginClick = () => {
    const elements = [...contentRef.current.children].reverse();
    const yellowElements = [...yellowContentRef.current.children].reverse();
    const tl = gsap.timeline();

    tl.to(yellowElements, {
      opacity: 0,
      y: -30,
      scale: 0.9,
      stagger: {
        each: 0.05,
        from: "start",
      },
      duration: 0.3,
      ease: "power2.in",
    });

    tl.to(
      elements,
      {
        opacity: 0,
        y: -30,
        scale: 0.9,
        stagger: {
          each: 0.05,
          from: "start",
        },
        duration: 0.3,
        ease: "power2.in",
      },
      "-=0.1"
    );

    tl.to(yellowBgRef.current, {
      x: "0%",
      width: "100%",
      duration: 0.4,
      ease: "power2.inOut",
    });

    tl.to(yellowBgRef.current, {
      width: "50%",
      x: "100%",
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        navigate("/login");
      },
    });
  };

  const formControls = {
    initial: { opacity: 1, y: 0 },
    exit: (i) => ({
      opacity: 0,
      y: Math.random() * 100 - 50,
      transition: { duration: 0.3, delay: i * 0.1 },
    }),
  };

  const yellowBgVariants = {
    initial: { width: "50%" },
    animate: { width: "100%", x: "50%" },
    exit: { width: "50%", x: 0 },
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("Поле обязательно для заполнения");
    } else if (!validateEmail(value)) {
      setEmailError("Некорректный формат email");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value) {
      setPasswordError("Поле обязательно для заполнения");
      setPasswordSuccess(false);
    } else if (value.length < 8) {
      setPasswordError("Пароль должен содержать минимум 8 символов");
      setPasswordSuccess(false);
    } else if (
      !/[A-Z]/.test(value) ||
      !/[a-z]/.test(value) ||
      !/\d/.test(value)
    ) {
      setPasswordError(
        "Пароль должен содержать заглавные, строчные буквы и цифры"
      );
      setPasswordSuccess(false);
    } else {
      setPasswordError("");
      setPasswordSuccess(true);
    }

    if (confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError("Пароли не совпадают");
      setConfirmPasswordSuccess(false);
    } else if (confirmPassword) {
      setConfirmPasswordError("");
      setConfirmPasswordSuccess(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (!value) {
      setConfirmPasswordError("Поле обязательно для заполнения");
      setConfirmPasswordSuccess(false);
    } else if (value !== password) {
      setConfirmPasswordError("Пароли не совпадают");
      setConfirmPasswordSuccess(false);
    } else {
      setConfirmPasswordError("");
      setConfirmPasswordSuccess(true);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={s.register_page}>
      <div className={s.main_wrap}>

        <div className={s.login_mobile}>
          <Link to={"login"}>
            <button className={s.go_login_mobile}>
              Войти 
            </button>
          </Link>
        </div>

        <div className={s.wrap}>
          <div className={s.login} ref={yellowBgRef}>
            <div ref={yellowContentRef}>
              <h1>С возвращением!</h1>
              <p>
                Введите свои личные данные, <br />
                чтобы использовать все функции сайта
              </p>
              <button className={s.go_login} onClick={handleLoginClick}>
                Войти
              </button>
            </div>
          </div>

          <div className={s.create__account} ref={contentRef}>
            <h2>Создать аккаунт</h2>

            <input type="name" className={s.name} placeholder="Имя" />

            <div className={s.form_group}>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={`${s.email} ${emailError ? s.error : ""}`}
                placeholder="Электронная почта"
              />
              {emailError && (
                <span className={s.error_message}>{emailError}</span>
              )}
            </div>

            <div className={s.form_group}>
              <div className={s.password_wrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  className={`${s.password} ${passwordError ? s.error : ""}`}
                  placeholder="Пароль"
                />
                <button
                  type="button"
                  className={s.show_password}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Скрыть" : "Показать"}
                </button>
              </div>
              {passwordError && (
                <span className={s.error_message}>{passwordError}</span>
              )}
            </div>

            <div className={s.form_group}>
              <div className={s.password_wrapper}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`${s.password} ${
                    confirmPasswordError ? s.error : ""
                  }`}
                  placeholder="Пароль"
                />
                <button
                  type="button"
                  className={s.show_password}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Скрыть" : "Показать"}
                </button>
              </div>
              {confirmPasswordError && (
                <span className={s.error_message}>{confirmPasswordError}</span>
              )}
            </div>

            <div className={s.social__media}>
              <img className={s.facebook} src="./facebook.svg" alt="" />
              <img className={s.google} src="./google.svg" alt="" />
              <img className={s.twitter} src="./twitter.svg" alt="" />
              <img className={s.vk} src="./vk.svg" alt="" />
            </div>

            <Link to={"/"}>
              <YellowButton>Подтвердить</YellowButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
