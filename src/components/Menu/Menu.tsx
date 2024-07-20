import styles from "./menu.module.css";
import Link from "next/link";
import { logout } from "@/store/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";

export function Menu() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleFavorite = () => {
    if (user) {
      router.push("/favorite");
    } else {
      alert("Вы не авторизованы");
    }
  };

  return (
    <div className={styles.navMenu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link className={styles.menuLink} href="/">
            Главное
          </Link>
        </li>
        <li onClick={handleFavorite} className={styles.menuItem}>
          <a onClick={handleLogout} className={styles.menuLink}>
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
