import Image from "next/image";
import { Fragment } from "react";

import "./style.scss";
import CatalogCard from "@/components/catalog-card";
import ProductCard from "@/components/product-card";
import { Icons } from "@/svg-icons";
import Link from "next/link";
import Slider from "@/components/swiper";

export default function Home() {
  return (
    <Fragment>
      <section className="hero">
        <div className="container hero__container">
          <div className="hero__main">
            <div className="hero__main__left">
              <h1>Строительные материалы высшего качества</h1>
              <p>Доставим прямо на ваш объект</p>
              <button>Заказать сейчас</button>
            </div>
            <div className="hero__main__right">
              <div className="img-box">
                <Image
                  src="/assets/images/hero.png"
                  fill
                  quality={100}
                  priority
                  alt="qurilish"
                />
              </div>
            </div>
          </div>
          <div className="hero__wrapper">
            <div className="hero__wrapper__card">
              <div className="hero__wrapper__card__left">
                <div className="icon-box">
                  <Icons.truck />
                </div>
              </div>
              <div className="hero__wrapper__card__right">
                <h3>Удобная доставка</h3>
                <p>Выгодная доставк при заказе от 500 000 сум</p>
              </div>
            </div>
            <div className="hero__wrapper__card">
              <div className="hero__wrapper__card__left">
                <div className="icon-box">
                  <Icons.truck />
                </div>
              </div>
              <div className="hero__wrapper__card__right">
                <h3>Удобная доставка</h3>
                <p>Выгодная доставк при заказе от 500 000 сум</p>
              </div>
            </div>
            <div className="hero__wrapper__card">
              <div className="hero__wrapper__card__left">
                <div className="icon-box">
                  <Icons.truck />
                </div>
              </div>
              <div className="hero__wrapper__card__right">
                <h3>Удобная доставка</h3>
                <p>Выгодная доставк при заказе от 500 000 сум</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="catalog">
        <div className="container">
          <h1 className="title">Каталог товаров</h1>
          <div className="catalog__wrapper">
            <CatalogCard
              img="/assets/images/catalog-img.png"
              title="Кирпичи и блоки"
            />
            <CatalogCard
              img="/assets/images/catalog-img.png"
              title="Цемент и сухие смеси"
            />
            <CatalogCard
              img="/assets/images/catalog-img.png"
              title="Изоляционные материалы"
            />
            <CatalogCard
              img="/assets/images/catalog-img.png"
              title="Сантехника"
            />
            <CatalogCard img="/assets/images/catalog-img.png" title="Крепеж" />
            <CatalogCard
              img="/assets/images/catalog-img.png"
              title="Интерьер и отделка"
            />
          </div>
        </div>
      </section>
      <section className="season">
        <div className="container">
          <h1 className="title">
            Товары сезона
            <span>
              <svg
                width="13"
                height="23"
                viewBox="0 0 13 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00012207 3.01463L2.12144 0.893311L12.728 11.4999L2.12144 22.1065L0.00012207 19.9852L8.4854 11.4999L0.00012207 3.01463Z"
                  fill="#333333"
                />
              </svg>
            </span>
          </h1>
          <div className="season__wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="brands">
        <div className="container">
          <h1 className="title">Бренды</h1>
          <div className="brands__wrapper">
            <div className="brand">
              <div className="img-box">
                <Image
                  src="/assets/images/knauf.png"
                  fill
                  priority
                  quality={100}
                  alt="knauf"
                />
              </div>
            </div>
            <div className="brand">
              <div className="img-box">
                <Image
                  src="/assets/images/knauf.png"
                  fill
                  priority
                  quality={100}
                  alt="knauf"
                />
              </div>
            </div>
            <div className="brand">
              <div className="img-box">
                <Image
                  src="/assets/images/knauf.png"
                  fill
                  priority
                  quality={100}
                  alt="knauf"
                />
              </div>
            </div>
            <div className="brand">
              <div className="img-box">
                <Image
                  src="/assets/images/knauf.png"
                  fill
                  priority
                  quality={100}
                  alt="knauf"
                />
              </div>
            </div>
            <div className="brand">
              <div className="img-box">
                <Image
                  src="/assets/images/knauf.png"
                  fill
                  priority
                  quality={100}
                  alt="knauf"
                />
              </div>
            </div>
            <div className="brand">
              <div className="img-box">
                <Image
                  src="/assets/images/knauf.png"
                  fill
                  priority
                  quality={100}
                  alt="knauf"
                />
              </div>
            </div>
            <div className="brand">
              <div className="img-box">
                <Image
                  src="/assets/images/knauf.png"
                  fill
                  priority
                  quality={100}
                  alt="knauf"
                />
              </div>
            </div>
            <div className="brand">
              <div className="img-box">
                <Image
                  src="/assets/images/knauf.png"
                  fill
                  priority
                  quality={100}
                  alt="knauf"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="discount">
        <div className="container">
          <Slider />
        </div>
      </section>
      <section className="about">
        <div className="container">
          <h1 className="title">О нас</h1>
          <h2>
            {` Добро пожаловать в `}
            <span> [Название компании]! </span>
            {` Мы предлагаем широкий
            ассортимент строительных материалов по доступным ценам. Быстрая
            доставка и индивидуальный подход к каждому клиенту.`}
          </h2>
        </div>
      </section>
      <section className="payment">
        <div className="container">
          <h1 className="title">Мы выдаем товары на</h1>
          <div className="payment__wrapper">
            <div className="payment-card">
              <h1>Кредит</h1>
              <p>Физическим лицам до 50 миллионов сум в срок до 12 месяцев</p>
              <Image
                src="/assets/images/ribo.png"
                width={138}
                height={125}
                alt="riboga"
              />
            </div>
            <div className="payment-card">
              <h1>Рассрочка</h1>
              <p>Субъектам предпринимательства до 300 миллионов сум</p>
              <Image
                src="/assets/images/nasiya.png"
                width={199}
                height={117}
                alt="nasiya"
              />
            </div>
            <div className="payment-card">
              <h1>Оптом</h1>
              <p>Субъектам предпринимательства до 600 миллионов сум</p>
              <Image
                src="/assets/images/ribo.png"
                width={133}
                height={149}
                alt="kotara"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="season" style={{ marginBottom: "120px" }}>
        <div className="container">
          <h1 className="title">
            Товары сезона
            <span>
              <svg
                width="13"
                height="23"
                viewBox="0 0 13 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00012207 3.01463L2.12144 0.893311L12.728 11.4999L2.12144 22.1065L0.00012207 19.9852L8.4854 11.4999L0.00012207 3.01463Z"
                  fill="#333333"
                />
              </svg>
            </span>
          </h1>
          <div className="season__wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="container">
          <h1 className="title">
            Блог и новости
            <span>
              <svg
                width="13"
                height="23"
                viewBox="0 0 13 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00012207 3.01463L2.12144 0.893311L12.728 11.4999L2.12144 22.1065L0.00012207 19.9852L8.4854 11.4999L0.00012207 3.01463Z"
                  fill="#333333"
                />
              </svg>
            </span>
          </h1>
          <div className="blog__wrapper">
            <div className="blog-card">
              <div className="blog-card__content">
                <h1>KL Group на выставке TransportLogistic в Мюнхене</h1>
              </div>
              <Image src="/assets/images/blog.jpg" fill alt="blog" />
            </div>
            <div className="blog-card">
              <div className="blog-card__content">
                <h1>KL Group на выставке TransportLogistic в Мюнхене</h1>
              </div>
              <Image src="/assets/images/blog.jpg" fill alt="blog" />
            </div>
            <div className="blog-card">
              <div className="blog-card__content">
                <h1>KL Group на выставке TransportLogistic в Мюнхене</h1>
              </div>
              <Image src="/assets/images/blog.jpg" fill alt="blog" />
            </div>
          </div>
        </div>
      </section>
      <section className="discount">
        <div className="container">
          <Slider />
        </div>
      </section>
      <section className="contacts">
        <div className="container contacts__container">
          <div className="contacts__container__left">
            <h1 className="title">Остались вопросы, свяжитесь с нами</h1>
            <p>
              <Icons.phone />
              +998 90 000-00-00
            </p>
            <p>
              <Icons.address />
              {`Ташкент, Шайхантахурский район, Джангох (Ц-15) ж/м, 37`}
            </p>
            <p>
              <Icons.email />
              info@gmail.com
            </p>
            <Image
              src="/assets/images/phone.png"
              width={194}
              height={168}
              alt="phone"
            />
          </div>
          <div className="contacts__container__right">
            <h1 className="title">Заказывайте в новом приложении</h1>
            <p>скачать мобильное приложение</p>
            <div className="download-apps">
              <Link href="https://play.google.com/store/apps/details?id=com.greentech.quran">
                <Image
                  src="/assets/images/gp.png"
                  width={188}
                  height={58}
                  alt="gp"
                />
              </Link>
              <Link href="https://apps.apple.com/us/app/quran-by-quran-com-%D9%82%D8%B1%D8%A2%D9%86/id1118663303">
                <Image
                  src="/assets/images/as.png"
                  width={188}
                  height={58}
                  alt="as"
                />
              </Link>
            </div>
            <Image
              src="/assets/images/phones.png"
              width={352}
              height={247}
              alt="phones"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
