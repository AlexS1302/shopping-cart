import styles from ".././ProductCards.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductSkeleton() {
  return (
    <article className={styles.productCard}>
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
    </article>
  );
}
export default ProductSkeleton;
