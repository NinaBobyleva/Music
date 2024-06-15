import Image from "next/image";
import styles from "./page.module.css";
import { Tracks } from "@/components/Tracks/Tracks";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Bar } from "@/components/Bar/Bar";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <Image
                className="logo__image"
                src="/img/logo.png"
                alt = "Skypro-logo"
                width={114}
                height={17}
              />
            </div>
            <div className="nav__burger burger">
              <span className="burger__line" />
              <span className="burger__line" />
              <span className="burger__line" />
            </div>
            <div className="nav__menu menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a className="menu__link" href="#">
                    Главное
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#">
                    Мой плейлист
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="../signin.html">
                    Войти
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search" />
              </svg>
              <input
                className="search__text"
                name="search"
                placeholder="Поиск"
                type="search"
              />
            </div>
            <Tracks />
          </div>
          <Sidebar />
        </main>
        <Bar />
        <footer className="footer" />
      </div>
    </div>
  );
}
