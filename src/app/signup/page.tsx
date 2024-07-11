import styles from "./page.module.css";
import Image from "next/image";

export default async function Signup() {
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
              className={styles.modalInput}
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
            <input
              className={styles.modalInput}
              name="password"
              placeholder="Повторите пароль"
              type="password"
            />
            <button className={styles.modalBtnSignupEnt}>
              <a href="../index.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
