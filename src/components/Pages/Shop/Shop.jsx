import { useMemo } from "react";
import useFilteredProducts from "../../../hooks/useFilteredProducts";
import { useOutletContext, useSearchParams } from "react-router";
import { Star, Heart } from "lucide-react";
import styles from "./Shop.module.css";
import RefinePanel from "./RefinePanel/RefinePanel";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";

function Shop() {
  const { setCartItems } = useOutletContext();

  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const sortParam = searchParams.get("sort") || "";
  const [sortBy, order = "asc"] = sortParam.split("-");
  const limit = parseInt(searchParams.get("limit") || 30);
  const skip = parseInt(searchParams.get("skip") || 0);

  const filters = useMemo(
    () => ({
      q,
      category,
      sortBy,
      order,
      limit,
      skip,
    }),
    [q, category, sortBy, order, limit, skip]
  );

  const { productInfo, loading, error, totalCount } =
    useFilteredProducts(filters);

  const showMoreProducts = productInfo.length + skip < totalCount;

  if (loading) return <p>Loading</p>;
  if (error) return <p>A network error was encountered</p>;
  console.log("Fetched product info:", productInfo);

  return (
    <div className={styles.Shop}>
      <RefinePanel filters={filters} />
      <section className={styles.productGrid}>
        {productInfo &&
          productInfo.map((product) => (
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
              <button
                type="button"
                onClick={() => setCartItems((prev) => [...prev, product])}
                className={styles.addToCartBtn}
              >
                Add to Cart
              </button>
            </article>
          ))}
      </section>
      {showMoreProducts && <LoadMoreButton limit={limit} skip={skip} />}
    </div>
  );
}
export default Shop;
