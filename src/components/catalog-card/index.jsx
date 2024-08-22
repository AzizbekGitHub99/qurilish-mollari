import Image from "next/image";

import "./catalog-card.scss"
const CatalogCard = ({ img, title }) => {
  return (
    <div className="catalog-card">
      <div className="catalog-card__left">
        <div className="img-box">
          <Image src={img} width={60} height={60} alt={title} />
        </div>
      </div>
      <div className="catalog-card__right">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CatalogCard;
