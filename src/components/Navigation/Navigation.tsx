import { Menu } from "../Menu/Menu";
import styles from "./navigation.module.css";
import Image from "next/image";

export function Navigation() {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image
          className={styles.logoImage}
          src="/img/logo.png"
          alt="Skypro-logo"
          width={114}
          height={17}
        />
      </div>
      <div className={styles.navBurger}>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div>
      <Menu />
    </nav>
  );
}
