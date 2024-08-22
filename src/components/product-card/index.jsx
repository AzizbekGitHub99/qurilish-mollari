import React from "react";
import "./product-card.scss";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/svg-icons";

const ProductCard = () => {
  return (
    <Link href="#" className="product-card">
      <div className="product-card__head">
        <div className="img-box">
          <Image
            src="/assets/images/card-img.png"
            fill
            priority
            quality={100}
            alt="uskuna"
          />
        </div>
        <div className="like-box"><Icons.heart/></div>
      </div>
      <div className="product-card__body">
        <div className="product-card__body__left">
          <p className="firm">Knauf</p>
          <h1>Смеситель для раковины Frap F1052-14</h1>
          <h2>417 452 сум / шт</h2>
        </div>
        <div className="product-card__body__right">
          <button><Icons.toCart/></button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
