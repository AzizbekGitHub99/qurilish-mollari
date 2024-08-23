import { Fragment } from "react";
import Link from "next/link";

import { Icons } from "@/svg-icons";
import NavLink from "../navlink";

import "./header.scss";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container header__container">
          <div className="header__container__left">
            <Link href="/" className="logo">Get it</Link>
            <button className="catalog-btn">
              <Icons.burger/> Каталог товаров
            </button>
            <div className="navs">
              <NavLink href="/">Главная</NavLink>
              <NavLink href="#">О нас</NavLink>
              <NavLink href="#">Услуги</NavLink>
              <NavLink href="#">Продукция</NavLink>
              <NavLink href="#">Блог</NavLink>
              <NavLink href="#">Контакты</NavLink>
            </div>
          </div>
          <div className="header__container__right">
            <button className="lang"><Icons.globus/> RU</button>
            <Link className="phone" href="tel:+998908205575">+71 123-45-67</Link>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
