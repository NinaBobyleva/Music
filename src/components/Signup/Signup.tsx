"use client";
import styles from "./signup.module.css";
import Image from "next/image";
import { useState } from "react";
import { signup } from "@/store/features/userSlice";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";

export function Signup() {
  const router = useRouter();
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    passwordTwo: "",
  });

  const onChangedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSignUp = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (inputValue.password !== inputValue.passwordTwo) {
        return alert('Оба пароля должны совпадать');
      }
      await dispatch(signup(inputValue)).unwrap();
      router.push("/login");
      console.log("Успешно!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Неизвестная ошибка");
      }
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
              value={inputValue.passwordTwo}
              name="passwordTwo"
              placeholder="Повторите пароль"
              type="password"
            />
            <p className={styles.error}>{error && error}</p>
            <button onClick={handleSignUp} className={styles.modalBtnSignupEnt}>
              <span>Зарегистрироваться</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
