import styles from "./ProductCards.module.css";
import { Star, Heart } from "lucide-react";
import { useOutletContext } from "react-router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AddToCartButton from "../../Pages/Shop/AddToCartButton/AddToCartButton";

function ProductCards({ product, loading }) {
  const { favouriteItems, setFavouriteItems } = useOutletContext();

  const isFavourite = favouriteItems.some((item) => item.id === product.id);

  const toggleFavourite = (product) => {
    setFavouriteItems((prev) =>
      isFavourite
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <article className={styles.productCard}>
      {loading ? (
        <>
          <Skeleton className={styles.productThumbnail} />

          <div className={styles.productText}>
            <div className={styles.productCategory}>
              <Skeleton width={100} height={20} />
            </div>
            <div className={styles.productTitle}>
              <Skeleton height={20} />
            </div>
            <div className={styles.productDesc}>
              <Skeleton height={20} count={3} />
            </div>
          </div>

          <div className={styles.productMetrics}>
            <Skeleton height={30} containerClassName={styles.flex1} />
          </div>

          <div className={styles.skeletonButton}>
            <Skeleton height={50} />
          </div>
        </>
      ) : (
        <>
          <Heart
            onClick={() => toggleFavourite(product)}
            className={`${styles.favouriteIcon} ${
              isFavourite ? styles.active : ""
            }`}
          />
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
        </>
      )}
    </article>
  );
}
export default ProductCards;
