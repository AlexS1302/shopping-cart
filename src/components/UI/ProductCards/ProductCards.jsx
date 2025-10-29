import styles from "./ProductCards.module.css";
import { Star, Heart } from "lucide-react";
import AddToCartButton from "../../Pages/Shop/AddToCartButton/AddToCartButton";

function ProductCards({ product }) {
  return (
    <article key={product.id} className={styles.productCard}>
      <Heart className={styles.favouriteIcon} />
      <img
        src={product.thumbnail}
        alt={`Picture of ${product.title}`}
        className={styles.productThumbnail}
      ></img>
      <div className={styles.productText}>
        <div className={styles.productCategory}>{product.category}</div>
        <div className={styles.productTitle}>{product.title}</div>
        <div className={styles.productDesc}>{product.description}</div>
      </div>
      <div className={styles.productMetrics}>
        <div className={styles.productPrice}>£{product.price}</div>
        <div className={styles.productRating}>
          <Star fill="#fdd85d" strokeWidth={0} />
          {product.rating}
        </div>
      </div>
      <AddToCartButton product={product} />
    </article>
  );
}
export default ProductCards;
