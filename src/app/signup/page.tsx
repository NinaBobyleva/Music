'use client'
// import { useAppDispatch } from "@/store/store";
import styles from "./page.module.css";
import Image from "next/image";
import { signup } from "@/api/user";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Signup() {
  const {user} = useSelector((state) => state.user);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const onChangedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  // const dispatch = useAppDispatch();
  let error = "";

  const {email, password} = inputValue;

  const handleSignUp = async () => {
    try {
      await signup({ email, password });
      console.log("Успешно!");
    } catch (err: unknown) {
      error = err instanceof Error ? "Ошибка при загрузке треков " + err.message : "Неизвестная ошибка" ;
      // console.error("Ошибка:", error.message);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
            <a href="../">
              <div className={styles.modalLogo}>
                <Image
                  alt="logo"
                  src="/img/logo_modal.png"
                  width={140}
                  height={21}
                />
              </div>
            </a>
            <input
              onChange={onChangedInput}
              className={styles.modalInput}
              value={inputValue.email}
              name="email"
              placeholder="Почта"
              type="text"
            />
            <input
              onChange={onChangedInput}
              className={styles.modalInput}
              value={inputValue.password}
              name="password"
              placeholder="Пароль"
              type="password"
            />
            <input
              onChange={onChangedInput}
              className={styles.modalInput}
              value={inputValue.password}
              name="password"
              placeholder="Повторите пароль"
              type="password"
            />
            <button onClick={handleSignUp} className={styles.modalBtnSignupEnt}>
              <Link href="/">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
