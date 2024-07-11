import styles from "./page.module.css";
import Image from "next/image";
import classNames from "classnames";

export default async function Signin() {
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
              className={classNames(styles.modalInput, styles.login)}
              name="login"
              placeholder="Почта"
              type="text"
            />
            <input
              className={styles.modalInput}
              name="password"
              placeholder="Пароль"
              type="password"
            />
            <button className={styles.modalBtnEnter}>
              <a href="../index.html">Войти</a>
            </button>
            <button className={styles.modalBtnSignup}>
              <a href="signup.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}