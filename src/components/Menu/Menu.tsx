import styles from "./menu.module.css";
import Link from "next/link";
import { logout } from "@/store/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

export function Menu() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.navMenu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} href="/">
            Главное
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} href="/favorite">
            Мой плейлист
          </Link>
        </li>
        <li className={styles.menuItem}>
          {user ? (
            <a onClick={handleLogout} className={styles.menuLink}>
              Выйти
            </a>
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
