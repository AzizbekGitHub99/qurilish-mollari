import { Fragment } from "react";
import "./footer.scss";
import Link from "next/link";
import { Icons } from "@/svg-icons";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-container__top">
            <ul>
              Информация
              <li>
                <Link href="#">О компании</Link>
              </li>
              <li>
                <Link href="#">Наши партнеры</Link>
              </li>
              <li>
                <Link href="#">Блог</Link>
              </li>
              <li>
                <Link href="#">О наших акциях и скидках</Link>
              </li>
              <li>
                <Link href="#">Пользовательское соглашение</Link>
              </li>
            </ul>
            <ul>
              Поддержка и сервис
              <li>
                <Link href="#">Вопросы и ответы</Link>
              </li>
              <li>
                <Link href="#">Отзывы</Link>
              </li>
              <li>
                <Link href="#">Контакты</Link>
              </li>
              <li>
                <Link href="#">Для партнеров</Link>
              </li>
            </ul>
            <ul>
              Каталог товаров
              <li>
                <Link href="#">Кирпичи и блоки</Link>
              </li>
              <li>
                <Link href="#">Цемент и сухие смеси</Link>
              </li>
              <li>
                <Link href="#">Изоляционные материалы</Link>
              </li>
              <li>
                <Link href="#">Сантехника</Link>
              </li>
            </ul>
            <ul>
              Контакты
              <li>
                <Link href="#">Телефон: +998 (71) 200-7-002</Link>
              </li>
              <li>
                <Link href="#">Ташкент, ул. Коратош, 106</Link>
              </li>
              {/* <li>
              <Link href="#">Изоляционные материалы</Link>
            </li>
            <li>
              <Link href="#">Сантехника</Link>
            </li> */}
            </ul>
          </div>
          <div className="footer-container__bottom">
            <div className="footer-container__bottom__left">
              <div className="socials">
                <div className="social">
                  <Icons.instgramm />
                </div>
                <div className="social">
                  <Icons.telegramm />
                </div>
                <div className="social">
                  <Icons.facebook />
                </div>
              </div>
              <p>© 2022 ООО «Интернет магазин «Get it».</p>
            </div>
            <div className="footer-container__bottom__right">
              <p>Мобильное приложение:</p>
              <div className="apps">
                <div className="app"><Icons.apple/></div>
                <div className="app"><Icons.android/></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
