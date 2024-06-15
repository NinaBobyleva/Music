import Image from "next/image";
import styles from "./page.module.css";
import { Tracks } from "@/components/Tracks/Tracks";

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
          <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__icon">
                <svg>
                  <use xlinkHref="img/icon/sprite.svg#logout" />
                </svg>
              </div>
            </div>
            <div className="sidebar__block">
              <div className="sidebar__list">
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <Image
                      alt="day's playlist"
                      className="sidebar__img"
                      src="/img/playlist01.png"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <Image
                      alt="day's playlist"
                      className="sidebar__img"
                      src="/img/playlist02.png"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <Image
                      alt="day's playlist"
                      className="sidebar__img"
                      src="/img/playlist03.png"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="bar">
          <div className="bar__content">
            <div className="bar__player-progress" />
            <div className="bar__player-block">
              <div className="bar__player player">
                <div className="player__controls">
                  <div className="player__btn-prev">
                    <svg className="player__btn-prev-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                    </svg>
                  </div>
                  <div className="player__btn-play _btn">
                    <svg className="player__btn-play-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-play" />
                    </svg>
                  </div>
                  <div className="player__btn-next">
                    <svg className="player__btn-next-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-next" />
                    </svg>
                  </div>
                  <div className="player__btn-repeat _btn-icon">
                    <svg className="player__btn-repeat-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                    </svg>
                  </div>
                  <div className="player__btn-shuffle _btn-icon">
                    <svg className="player__btn-shuffle-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                    </svg>
                  </div>
                </div>
                <div className="player__track-play track-play">
                  <div className="track-play__contain">
                    <div className="track-play__image">
                      <svg className="track-play__svg">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>
                    </div>
                    <div className="track-play__author">
                      <a className="track-play__author-link" href="http://">
                        Ты та...
                      </a>
                    </div>
                    <div className="track-play__album">
                      <a className="track-play__album-link" href="http://">
                        Баста
                      </a>
                    </div>
                  </div>
                  <div className="track-play__like-dis">
                    <div className="track-play__like _btn-icon">
                      <svg className="track-play__like-svg">
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                      </svg>
                    </div>
                    <div className="track-play__dislike _btn-icon">
                      <svg className="track-play__dislike-svg">
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bar__volume-block volume">
                <div className="volume__content">
                  <div className="volume__image">
                    <svg className="volume__svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                    </svg>
                  </div>
                  <div className="volume__progress _btn">
                    <input
                      className="volume__progress-line _btn"
                      name="range"
                      type="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer" />
      </div>
    </div>
  );
}
