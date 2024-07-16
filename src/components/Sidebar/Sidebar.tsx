"use client";
import Image from "next/image";
import styles from "./sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/features/userSlice";

export function Sidebar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.mainSidebar}>
      {user ? (
        <div className={styles.sidebarPersonal}>
          <p className={styles.sidebarPersonalName}>{user.username}</p>
          <div onClick={handleLogout} className={styles.sidebarIcon}>
            <svg>
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                alt="day's playlist"
                className={styles.sidebarImg}
                src="/img/playlist01.png"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                alt="day's playlist"
                className={styles.sidebarImg}
                src="/img/playlist02.png"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                alt="day's playlist"
                className={styles.sidebarImg}
                src="/img/playlist03.png"
                width={250}
                height={150}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
