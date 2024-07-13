import { useSelector } from "react-redux";
import styles from "./menu.module.css";
import Link from "next/link";

export function Menu() {
  const { user, logout } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className={styles.navMenu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="#">
            Главное
          </a>
        </li>
        <li className={styles.menuItem}>
          <a className={styles.menuLink} href="#">
            Мой плейлист
          </a>
        </li>
        <li className={styles.menuItem}>
          {user ? (
            <Link onClick={logout} className={styles.menuLink} href="/signin">
              Выйти
            </Link>
          ) : (
            <Link className={styles.menuLink} href="/signin">
              Войти
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}
