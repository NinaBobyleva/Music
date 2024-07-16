"use client";
import styles from "./page.module.css";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { useAppDispatch } from "@/store/store";
import { getUser } from "@/api/user";
import { useState } from "react";
import { getToken } from "@/api/token";
import { useSelector } from "react-redux";
import { setRefresh } from "@/store/features/userSlice";

export default function Signin() {
  const { error } = useSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const onChangedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const { email, password } = inputValue;

  let err = "";

  const handleSignin = async () => {
    try {
      await dispatch(getUser({ email, password })).unwrap();
      getToken({ email, password }).then((tokens) => {
        const { refresh } = tokens;
        dispatch(setRefresh(refresh));
      });
      console.log("Успешно!");
    } catch (error: unknown) {
      err = error instanceof Error ? error.message : "Неизвестная ошибка";
      console.log(err);
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
              {error ? (
                <Link href="/signin">Войти</Link>
              ) : (
                <Link href="/">Войти</Link>
              )}
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
