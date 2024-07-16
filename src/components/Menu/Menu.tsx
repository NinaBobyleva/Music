import { useDispatch, useSelector } from "react-redux";
import styles from "./menu.module.css";
import Link from "next/link";
import { logout } from "@/store/features/userSlice";

export function Menu() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);
  
  const handleLogout = () => {
    dispatch(logout());
  };
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
