"use client";
import styles from "./page.module.css";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { useAppDispatch } from "@/store/store";
import { getUser } from "@/api/user";
import { useState } from "react";

export default function Signin() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const onChangedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const dispatch = useAppDispatch();
  let error = "";

  const {email, password} = inputValue;

  const handleSignin = async () => {
    try {
      await dispatch(getUser({ email, password })).unwrap();
      console.log("Успешно!");
    } catch (err: unknown) {
      error = err instanceof Error ? "Ошибка при загрузке треков " + err.message : "Неизвестная ошибка" ;
      // console.error("Ошибка:", error.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form action="#" className={styles.modalFormLogin}>
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
              className={classNames(styles.modalInput, styles.login)}
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
            <button onClick={handleSignin} className={styles.modalBtnEnter}>
              <Link href="/">Войти</Link>
            </button>
            <button className={styles.modalBtnSignup}>
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
